import { useCallback, useEffect, useRef, useState, type MutableRefObject } from 'react';

const INTRO_VIDEO_SRC = '/video/intro1.mp4';
const FADE_DURATION_SECONDS = 0.5;
const DEFAULT_VIDEO_SECONDS = 4;
const OVERLAY_REMOVE_DELAY_MS = 560;
const INTRO_SEEN_STORAGE_KEY = 'jellyfish-intro-video-seen';

let introClaimedThisRuntime = false;

function shouldShowIntro() {
  if (introClaimedThisRuntime) {
    return true;
  }

  try {
    if (window.sessionStorage.getItem(INTRO_SEEN_STORAGE_KEY) === 'true') {
      return false;
    }

    window.sessionStorage.setItem(INTRO_SEEN_STORAGE_KEY, 'true');
  } catch {
    return true;
  }

  introClaimedThisRuntime = true;
  return true;
}

function IntroVideo() {
  const [isVisible, setIsVisible] = useState(shouldShowIntro);
  const [isFading, setIsFading] = useState(false);
  const fadeTimerRef = useRef<number | null>(null);
  const removeTimerRef = useRef<number | null>(null);
  const fallbackTimerRef = useRef<number | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const clearTimer = useCallback((timerRef: MutableRefObject<number | null>) => {
    if (timerRef.current !== null) {
      window.clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const clearIntroTimers = useCallback(() => {
    clearTimer(fadeTimerRef);
    clearTimer(removeTimerRef);
    clearTimer(fallbackTimerRef);
  }, [clearTimer]);

  const removeOverlay = useCallback(() => {
    setIsFading(true);
    clearTimer(removeTimerRef);
    removeTimerRef.current = window.setTimeout(() => {
      setIsVisible(false);
    }, OVERLAY_REMOVE_DELAY_MS);
  }, [clearTimer]);

  const scheduleFade = useCallback(
    (remainingSeconds: number) => {
      clearTimer(fadeTimerRef);
      clearTimer(removeTimerRef);

      const safeRemainingSeconds =
        Number.isFinite(remainingSeconds) && remainingSeconds > 0
          ? remainingSeconds
          : DEFAULT_VIDEO_SECONDS;
      const fadeDelayMs = Math.max(
        (safeRemainingSeconds - FADE_DURATION_SECONDS) * 1000,
        0,
      );
      const removeDelayMs = Math.max(safeRemainingSeconds * 1000, OVERLAY_REMOVE_DELAY_MS);

      fadeTimerRef.current = window.setTimeout(() => {
        setIsFading(true);
      }, fadeDelayMs);

      removeTimerRef.current = window.setTimeout(() => {
        setIsVisible(false);
      }, removeDelayMs);
    },
    [clearTimer],
  );

  const handlePlaybackStart = useCallback(() => {
    const video = videoRef.current;

    if (!video) {
      scheduleFade(DEFAULT_VIDEO_SECONDS);
      return;
    }

    const remainingSeconds =
      Number.isFinite(video.duration) && video.duration > 0
        ? video.duration - video.currentTime
        : DEFAULT_VIDEO_SECONDS;

    scheduleFade(remainingSeconds);
  }, [scheduleFade]);

  const handleTimeUpdate = useCallback(() => {
    const video = videoRef.current;

    if (
      video &&
      Number.isFinite(video.duration) &&
      video.duration - video.currentTime <= FADE_DURATION_SECONDS
    ) {
      setIsFading(true);
    }
  }, []);

  useEffect(() => {
    if (!isVisible) {
      clearIntroTimers();
      document.body.classList.remove('intro-video-playing');
      return;
    }

    document.body.classList.add('intro-video-playing');

    return () => {
      document.body.classList.remove('intro-video-playing');
    };
  }, [clearIntroTimers, isVisible]);

  useEffect(() => {
    const video = videoRef.current;

    fallbackTimerRef.current = window.setTimeout(() => {
      removeOverlay();
    }, (DEFAULT_VIDEO_SECONDS + 2) * 1000);

    if (video) {
      const playPromise = video.play();

      if (playPromise) {
        playPromise.catch(() => {
          scheduleFade(DEFAULT_VIDEO_SECONDS);
        });
      }
    }

    return clearIntroTimers;
  }, [clearIntroTimers, removeOverlay, scheduleFade]);

  if (!isVisible) {
    return null;
  }

  return (
    <div className={`intro-overlay${isFading ? ' is-fading' : ''}`} aria-hidden="true">
      <video
        ref={videoRef}
        className="intro-video"
        src={INTRO_VIDEO_SRC}
        autoPlay
        muted
        playsInline
        preload="auto"
        onCanPlay={handlePlaybackStart}
        onPlay={handlePlaybackStart}
        onTimeUpdate={handleTimeUpdate}
        onEnded={removeOverlay}
        onError={removeOverlay}
      />
    </div>
  );
}

export default IntroVideo;
