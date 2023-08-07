import { kick, rumble, tikTok, twitch, youTube } from "../assets/icons.js";

const getPlatformIcon = (streamingPlatform) => {
  const platformIcons = {
    Twitch: twitch,
    YouTube: youTube,
    TikTok: tikTok,
    Kick: kick,
    Rumble: rumble,
  };

  return platformIcons[streamingPlatform] || null;
};

export default getPlatformIcon;
