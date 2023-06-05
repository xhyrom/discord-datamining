const args = process.argv.slice(2);
const action = args[0];

switch (action) {
  case "diff": {
    await import("./diff/index.js");
    break;
  }
  case "discord": {
    await import("./discord/index.js");
    break;
  }
  case "discord-blog-posts": {
    await import("./discord-blog-posts/index.js");
    break;
  }
  case "discord-experiments": {
    await import("./discord-experiments/index.js");
    break;
  }
  case "discord-support-articles": {
    await import("./discord-support-articles/index.js");
    break;
  }
  case "discord-support-dev-articles": {
    await import("./discord-support-dev-articles/index.js");
    break;
  }
  case "discord-creator-support-articles": {
    await import("./discord-creator-support-articles/index.js");
    break;
  }
  case "domains": {
    await import("./domains/index.js");
    break;
  }
  case "discord-routes": {
    await import("./discord-routes/index.js");
    break;
  }
  case "github": {
    await import("./github/index.js");
    break;
  }
}

console.log("Success!");

export {};
