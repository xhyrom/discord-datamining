<body class="body-article contrast">
  <div class="w-embed">
    <style>
      .bottom-nav_blur {
        background-color: #1c1c1c;
      }
      .bottom-dd_toggle {
        color: white;
      }
      .bottom-nav {
        color: white;
      }
      .body-article .bottom_nav_line {
        background-color: #808081;
      }
      .body-article .toggle-wrapper {
        border-color: #808081;
      }
      .nav_brand_main-logo,
      .nav_burger_trigger,
      .nav_dd_arrow-wr-white {
        display: none;
      }
      .nav_brand_main-black-logo,
      .nav_burger_trigger-black,
      .nav_dd_arrow-wr-black {
        display: flex;
      }
      .text-category {
        color: #000;
      }
      .article_author_job-2 {
        color: #000;
        opacity: 50%;
      }
      .body-article.contrast .toggle-light-icon {
        color: #000;
      }
      .article_author-wr,
      .tags-wr {
        color: #000;
      }
      .text-category_article {
        color: #00000080;
      }
      .article_tag {
        background-color: #cdcfe5;
      }
      .body-article .article_rich-text-2,
      .body-article .article_rich-text-2 figcaption {
        color: white;
      }
      .body-article.contrast .article_rich-text-2 {
        color: #000;
      }
      .body-article.contrast .toggle-dark-icon {
        color: white;
        opacity: 50%;
      }
      .body-article .toggle-dark-icon {
        color: white;
      }
      .body-article.contrast .toggle-light-icon {
        color: white;
      }
      .body-article.contrast .nav_dd:focus-within .nav_link,
      .nav_dd:hover .nav_link {
        color: white;
      }
      .body-article.contrast .toggle-circle {
        right: 47px;
      }
      @media (min-width: 992px) {
        .body-article.contrast .nav_link,
        .body-article.contrast .nav_dd_trigger {
          color: #000;
        }
        .body-article.contrast .button-nav {
          color: white;
          background-color: black;
        }
        .body-article.contrast .nav_dd:has(.nav_dd_trigger.w--open) .nav_link,
        .body-article.contrast
          .nav_dd:has(.nav_dd_trigger.w--open)
          .nav_dd_trigger {
          color: white;
        }
        .body-article.contrast
          .nav_dd:has(.nav_dd_trigger.w--open)
          .nav_dd_arrow-wr-white {
          display: flex;
        }
        .body-article.contrast
          .nav_dd:has(.nav_dd_trigger.w--open)
          .nav_dd_arrow-wr-black {
          display: none;
        }
        .nav_wrapper.submenu-open .nav_brand_main-logo {
          display: block;
        }
        .nav_wrapper.submenu-open .nav_brand_main-black-logo {
          display: none;
        }
        .nav_wrapper.submenu-open .button-nav {
          color: black;
          background-color: white;
          transition: background-color 0.05s;
        }
        .nav_wrapper.submenu-open .nav_link,
        .nav_wrapper.submenu-open .nav_dd_trigger {
          color: white; /* Changing the color for neighboring dropdowns */
        }
        .nav_wrapper.submenu-open .nav_dd_arrow-wr-black {
          display: none;
        }
        .nav_wrapper.submenu-open .nav_dd_arrow-wr-white {
          display: block;
        }
      }
      .bottom_toc_link:hover {
        background-color: #323232;
      }
      .bottom-dd_icon-s {
        color: white;
      }
      .nav_brand_main-black-logo {
        opacity: 1;
      }
    </style>
    <style>
      .menu-button-login.login-button-js {
        color: white;
        background-color: black;
      }
    </style>
  </div>
  <div class="w-embed">
    <style>
      body {
        font-smoothing: antialiased;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-rendering: optimizeLegibility;
      }
    </style>
  </div>
  <header class="nav">
    <div class="nav_styles w-embed">
      <style>
        /*nav styles*/
        .nav:has(.nav_dd_trigger.w--open) .nav_blur {
          display: block;
          height: 100%;
          transition: opacity 0.4s;
          opacity: 1;
        }
        /* Focus state style for keyboard navigation for the focusable elements */
        *[tabindex]:focus-visible,
        input[type="file"]:focus-visible {
          outline: 0.125rem solid #fff;
          outline-offset: 0.125rem;
        }
        .nav_blur {
          display: block;
          opacity: 0;
          visibility: hidden;
          transition:
            opacity 0.4s,
            visibility 0.4s;
        }
        .nav:has(.nav_dd_trigger.w--open) .nav_blur {
          opacity: 1;
          visibility: visible;
        }
        .nav:has(.nav_dd_trigger.w--open) .nav_dd_bg {
          transform: scaleY(1);
        }
        .nav_burger_content .nav_link {
          padding-top: 1.5rem;
          padding-left: 0;
          padding-bottom: 1.5rem;
          border-bottom: 1px solid #ffffff10;
          border-radius: 0px;
          justify-content: left;
        }
        .nav_burger_content .nav_dd_trigger {
          padding-top: 1.5rem;
          padding-left: 0;
          padding-bottom: 1.5rem;
          border-bottom: none;
          justify-content: space-between;
          flex-grow: 1;
        }
        .nav_burger_content .nav_dd {
          border-bottom: 1px solid #ffffff10;
          border-radius: 0px;
        }
        .nav_menu.is-burger::-webkit-scrollbar {
          width: 0px;
          height: 10px;
        }
        .nav_dd_link-group:last-child {
          border: 0px;
        }
        .dd_nav-link:hover .nav_dd_link_arrow {
          transform: translate(2px, -2px);
        }
        @media screen and (max-width: 340px) and (min-width: 240px) {
          .nav_brand {
            width: 7.45rem;
          }
        }
      </style>
    </div>
    <div class="nav_padding">
      <div class="nav_wrapper">
        <a href="/" class="nav_brand w-nav-brand"
          ><img
            width="146"
            loading="lazy"
            alt="Home"
            src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/66e90ab9506850e8a5dd48e3_Discrod_MainLogo.svg"
            class="nav_brand_main-logo" />
          <div class="nav_brand_main-black-logo">
            <img
              width="146"
              loading="lazy"
              alt=""
              src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/67ed8194f41d7d8eade32c90_Logo.svg"
              class="nav_brand_main-black-icon"
            /><img
              width="Auto"
              loading="lazy"
              alt=""
              src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/67ece93be2524af5cf14dc1c_Logo-black-bg.svg"
              class="nav_brand_main-logo-2"
            /><img
              src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/67d00cf7266d2c75571aebde_Example.svg"
              loading="lazy"
              alt=""
              class="nav_brand_main-logo-bg"
            /></div
        ></a>
        <div class="nav_menu_wr">
          <ul role="list" class="nav_menu">
            <li><a href="/download" class="nav_link">Download</a></li>
            <li><a href="/nitro" class="nav_link">Nitro</a></li>
            <li><a href="/servers" class="nav_link">Discover</a></li>
            <li>
              <div
                data-delay="0"
                data-hover="true"
                class="nav_dd is-relative w-dropdown"
              >
                <div class="nav_dd_trigger w-dropdown-toggle">
                  <div>Safety</div>
                  <div class="nav_dd_arrow-wr-white">
                    <div class="nav_dd_arrow w-embed">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 6L8 10L4 6"
                          stroke="white"
                          stroke-opacity="0.5"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div class="nav_dd_arrow-wr-black">
                    <div class="nav_dd_arrow w-embed">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 6L8 10L4 6"
                          stroke="black"
                          stroke-opacity="0.5"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <a
                    tabindex="0"
                    href="/safety"
                    class="nav_link_dropdown w-inline-block"
                  ></a>
                </div>
                <nav class="nav_dd_list is-safety w-dropdown-list">
                  <div class="nav_dd_content-wr isnew">
                    <div class="nav_dd_content_layout top-none _2-col is_n">
                      <div class="nav_dd_link-group is_2025 is_n">
                        <div class="nav_dd_link_list is-new">
                          <div class="nav_dd_link_title">Resources</div>
                          <a href="/safety-family-center" class="dd_nav-link"
                            >Family Center</a
                          ><a href="/safety-library" class="dd_nav-link"
                            >Safety Library</a
                          ><a href="/safety-news" class="dd_nav-link"
                            >Safety News</a
                          ><a
                            href="/safety-teen-charter"
                            class="dd_nav-link w-inline-block"
                            ><div>Teen Charter</div></a
                          >
                        </div>
                      </div>
                      <div class="nav_dd_link-group is_hub">
                        <div class="nav_dd_link_list is-new">
                          <div class="nav_dd_link_title">Hubs</div>
                          <a
                            href="/safety-parents"
                            class="dd_nav-link w-inline-block"
                            ><div>Parent Hub</div></a
                          ><a
                            href="/safety-policies"
                            class="dd_nav-link w-inline-block"
                            ><div>Policy Hub</div></a
                          ><a
                            href="/safety-privacy"
                            class="dd_nav-link w-inline-block"
                            ><div>Privacy Hub</div></a
                          ><a
                            href="/safety-transparency"
                            class="dd_nav-link w-inline-block"
                            ><div>Transparency Hub</div></a
                          ><a
                            href="/safety-wellbeing"
                            class="dd_nav-link w-inline-block"
                            ><div>Wellbeing Hub</div></a
                          >
                        </div>
                      </div>
                    </div>
                    <img
                      src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/678a4dee303240abdd278abf_Egg.webp"
                      loading="eager"
                      alt=""
                      class="nav-dd-decor is-safety"
                    />
                  </div>
                </nav>
              </div>
            </li>
            <li>
              <div
                data-delay="0"
                data-hover="true"
                class="nav_dd is-relative w-dropdown"
              >
                <div class="nav_dd_trigger w-dropdown-toggle">
                  <div>Quests</div>
                  <div class="nav_dd_arrow-wr-white">
                    <div class="nav_dd_arrow w-embed">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 6L8 10L4 6"
                          stroke="white"
                          stroke-opacity="0.5"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div class="nav_dd_arrow-wr-black">
                    <div class="nav_dd_arrow w-embed">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 6L8 10L4 6"
                          stroke="black"
                          stroke-opacity="0.5"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <a
                    tabindex="0"
                    href="/ads/quests"
                    class="nav_link_dropdown w-inline-block"
                  ></a>
                </div>
                <nav class="nav_dd_list is-safety w-dropdown-list">
                  <div class="nav_dd_content-wr isnew">
                    <div class="nav_dd_content_layout top-none _1-col">
                      <div class="nav_dd_link-group">
                        <div class="nav_dd_link_list">
                          <div class="nav_dd_link_title">Resources</div>
                          <a href="/ads/quests" class="dd_nav-link"
                            >Advertising</a
                          ><a
                            href="/ads/quests-success-stories"
                            class="dd_nav-link"
                            >Success Stories</a
                          ><a href="/ads/quests-faq" class="dd_nav-link"
                            >Quests FAQ</a
                          >
                        </div>
                      </div>
                    </div>
                    <img
                      src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/678a4e92695af76b1f7487a3_Set%201%2015.webp"
                      loading="eager"
                      alt=""
                      class="nav-dd-decor"
                    />
                  </div>
                </nav>
              </div>
            </li>
            <li>
              <div
                data-delay="0"
                data-hover="true"
                class="nav_dd is-relative w-dropdown"
              >
                <div class="nav_dd_trigger w-dropdown-toggle">
                  <div>Support</div>
                  <div class="nav_dd_arrow-wr-white">
                    <div class="nav_dd_arrow w-embed">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 6L8 10L4 6"
                          stroke="white"
                          stroke-opacity="0.5"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div class="nav_dd_arrow-wr-black">
                    <div class="nav_dd_arrow w-embed">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 6L8 10L4 6"
                          stroke="black"
                          stroke-opacity="0.5"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <a
                    tabindex="0"
                    href="https://support.discord.com/hc/"
                    class="nav_link_dropdown w-inline-block"
                  ></a>
                </div>
                <nav class="nav_dd_list is-safety w-dropdown-list">
                  <div class="nav_dd_content-wr isnew">
                    <div class="nav_dd_content_layout top-none _1-col">
                      <div class="nav_dd_link-group">
                        <div class="nav_dd_link_list">
                          <div class="nav_dd_link_title">Resources</div>
                          <a
                            href="https://support.discord.com/hc"
                            class="dd_nav-link"
                            >Help Center</a
                          ><a
                            href="https://support.discord.com/hc/en-us/community/topics"
                            class="dd_nav-link"
                            >Feedback</a
                          ><a
                            href="https://support.discord.com/hc/en-us/requests/new"
                            class="dd_nav-link"
                            >Submit a Request</a
                          >
                        </div>
                      </div>
                    </div>
                    <img
                      src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/678a4b31695af76b1f713594_Discord_Nelly_Pose2_Flying%201.webp"
                      loading="eager"
                      alt=""
                      class="nav-dd-decor is-support"
                    />
                  </div>
                </nav>
              </div>
            </li>
            <li>
              <div
                data-delay="0"
                data-hover="true"
                class="nav_dd is-relative w-dropdown"
              >
                <div class="nav_dd_trigger w-dropdown-toggle">
                  <div>Blog</div>
                  <div class="nav_dd_arrow-wr-white">
                    <div class="nav_dd_arrow w-embed">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 6L8 10L4 6"
                          stroke="white"
                          stroke-opacity="0.5"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div class="nav_dd_arrow-wr-black">
                    <div class="nav_dd_arrow w-embed">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 6L8 10L4 6"
                          stroke="black"
                          stroke-opacity="0.5"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <a
                    tabindex="0"
                    href="/blog"
                    class="nav_link_dropdown w-inline-block"
                  ></a>
                </div>
                <nav class="nav_dd_list is-safety w-dropdown-list">
                  <div class="nav_dd_content-wr isnew">
                    <div class="nav_dd_content_layout top-none _1-col">
                      <div class="nav_dd_link-group">
                        <div class="nav_dd_link_list">
                          <div class="nav_dd_link_title">Collections</div>
                          <a href="/blog" class="dd_nav-link">Featured</a
                          ><a href="/category/community" class="dd_nav-link"
                            >Community</a
                          ><a href="/category/company" class="dd_nav-link"
                            >Discord HQ</a
                          ><a href="/category/engineering" class="dd_nav-link"
                            >Engineering &amp; Developers</a
                          ><a
                            href="/category/how-to-discord"
                            class="dd_nav-link"
                            >How to Discord</a
                          ><a href="/category/safety" class="dd_nav-link"
                            >Policy &amp; Safety</a
                          ><a href="/category/product" class="dd_nav-link"
                            >Product &amp; Features</a
                          >
                        </div>
                      </div>
                    </div>
                    <img
                      src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/678a4c12dbf6be5d792aa920_Clyde%20Cube.webp"
                      loading="eager"
                      alt=""
                      class="nav-dd-decor is-blog"
                    />
                  </div>
                </nav>
              </div>
            </li>
            <li>
              <div
                data-delay="0"
                data-hover="true"
                class="nav_dd is-relative w-dropdown"
              >
                <div class="nav_dd_trigger w-dropdown-toggle">
                  <div>Developers</div>
                  <div class="nav_dd_arrow-wr-white">
                    <div class="nav_dd_arrow w-embed">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 6L8 10L4 6"
                          stroke="white"
                          stroke-opacity="0.5"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div class="nav_dd_arrow-wr-black">
                    <div class="nav_dd_arrow w-embed">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 6L8 10L4 6"
                          stroke="black"
                          stroke-opacity="0.5"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <a
                    tabindex="0"
                    href="/developers"
                    class="nav_link_dropdown w-inline-block"
                  ></a>
                </div>
                <nav class="nav_dd_list is-safety w-dropdown-list">
                  <div class="nav_dd_content-wr isnew">
                    <div class="nav_dd_content_layout top-none _2-col">
                      <div class="nav_dd_link-group">
                        <div class="nav_dd_link_list">
                          <div class="nav_dd_link_title">Featured</div>
                          <a
                            href="/developers/social-sdk"
                            class="dd_nav-link w-inline-block"
                            ><div>Discord Social SDK</div></a
                          ><a
                            href="/developers/build"
                            class="dd_nav-link w-inline-block"
                            ><div>Apps and Activities</div></a
                          >
                        </div>
                        <div class="nav_dd_link_line is-n"></div>
                        <div class="nav_dd_link_list">
                          <div class="nav_dd_link_title">Documentation</div>
                          <a
                            href="/developers"
                            class="dd_nav-link w-inline-block"
                            ><div>Developer Home</div></a
                          ><a
                            href="/developers/docs/intro"
                            class="dd_nav-link w-inline-block"
                            ><div>Developer Documentation</div>
                            <div class="nav_dd_link_arrow w-embed">
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M5 4H12M12 4V11M12 4L4 12"
                                  stroke="white"
                                  stroke-opacity="0.5"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                ></path>
                              </svg></div></a
                          ><a
                            href="/developers/applications"
                            class="dd_nav-link w-inline-block"
                            ><div>Developer Applications</div>
                            <div class="nav_dd_link_arrow w-embed">
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M5 4H12M12 4V11M12 4L4 12"
                                  stroke="white"
                                  stroke-opacity="0.5"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                ></path>
                              </svg></div></a
                          ><a
                            href="https://support-dev.discord.com/hc/en-us"
                            class="dd_nav-link w-inline-block"
                            ><div>Developer Help Center</div>
                            <div class="nav_dd_link_arrow w-embed">
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M5 4H12M12 4V11M12 4L4 12"
                                  stroke="white"
                                  stroke-opacity="0.5"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                ></path>
                              </svg></div
                          ></a>
                        </div>
                      </div>
                    </div>
                    <img
                      src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/678a4aae3ee9f2e87506de82_Clyde%20(1).webp"
                      loading="eager"
                      alt=""
                      class="nav-dd-decor is-build"
                    />
                  </div>
                </nav>
              </div>
            </li>
            <li><a href="/careers" class="nav_link is_careers">Careers</a></li>
          </ul>
        </div>
        <div class="nav_buttons-wr_new">
          <a
            data-track-nav="login"
            data-track="login"
            href="https://discord.com/app"
            class="menu-button-login login-button-js abc"
            >Log in</a
          ><a
            id="login"
            data-track="login"
            data-track-nav="login"
            href="https://discord.com/app"
            class="button-nav login-button-js new w-button"
            >Log In</a
          >
        </div>
        <div
          id="w-node-f6bae115-40df-f6c0-010e-7dc6a2133746-a21336e6"
          class="nav_burger_button"
        >
          <div
            data-w-id="f6bae115-40df-f6c0-010e-7dc6a2133747"
            class="nav_burger_trigger"
          >
            <div class="close_icon w-embed">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4 6C4 5.44772 4.44772 5 5 5H19C19.5523 5 20 5.44772 20 6C20 6.55228 19.5523 7 19 7H5C4.44772 7 4 6.55228 4 6ZM4 12C4 11.4477 4.44772 11 5 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H5C4.44772 13 4 12.5523 4 12ZM5 17C4.44772 17 4 17.4477 4 18C4 18.5523 4.44772 19 5 19H12C12.5523 19 13 18.5523 13 18C13 17.4477 12.5523 17 12 17H5Z"
                  fill="white"
                ></path>
              </svg>
            </div>
          </div>
          <div
            data-w-id="f6bae115-40df-f6c0-010e-7dc6a2133749"
            class="nav_burger_trigger-black"
          >
            <div class="close_icon w-embed">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4 6C4 5.44772 4.44772 5 5 5H19C19.5523 5 20 5.44772 20 6C20 6.55228 19.5523 7 19 7H5C4.44772 7 4 6.55228 4 6ZM4 12C4 11.4477 4.44772 11 5 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H5C4.44772 13 4 12.5523 4 12ZM5 17C4.44772 17 4 17.4477 4 18C4 18.5523 4.44772 19 5 19H12C12.5523 19 13 18.5523 13 18C13 17.4477 12.5523 17 12 17H5Z"
                  fill="black"
                ></path>
              </svg>
            </div>
          </div>
          <div class="nav_burger_list">
            <div class="nav_burger_content">
              <div class="nav_burger_top">
                <a
                  href="https://discord.com/"
                  class="nav_brand is-burger w-nav-brand"
                  ><img
                    loading="lazy"
                    src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/66e278299a53f5bf88615e90_Symbol.svg"
                    alt=""
                    class="nav-brand_logo-burger" /></a
                ><a
                  href="#"
                  title="Close menu"
                  data-w-id="f6bae115-40df-f6c0-010e-7dc6a2133750"
                  class="nav_burger_close w-nav-brand"
                  ><div class="close_icon w-embed">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18 6L6 18M6 6L18 18"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                      ></path>
                    </svg></div
                ></a>
              </div>
              <ul role="list" class="nav_menu is-burger">
                <li>
                  <a href="https://discord.com/download" class="nav_link"
                    >Download</a
                  >
                </li>
                <li>
                  <a href="https://discord.com/nitro" class="nav_link">Nitro</a>
                </li>
                <li>
                  <a href="https://discord.com/servers" class="nav_link"
                    >Discover</a
                  >
                </li>
                <li>
                  <div
                    data-delay="0"
                    data-hover="false"
                    class="nav_dd w-dropdown"
                  >
                    <div class="nav_dd_trigger w-dropdown-toggle">
                      <div>Safety</div>
                      <div class="nav_dd_arrow w-embed">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12 6L8 10L4 6"
                            stroke="white"
                            stroke-opacity="0.5"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <nav class="nav_dd_list is-burger w-dropdown-list">
                      <div class="nav_dd_content-wr">
                        <div class="nav_dd_separator"></div>
                        <div class="nav_dd_content_layout">
                          <div class="nav_dd_link-group">
                            <a
                              href="/safety"
                              class="nav_dd_link-group_title is-new"
                              >Safety</a
                            >
                            <div class="nav_dd_link_list">
                              <div class="nav_dd_link_title is-new">
                                Resources
                              </div>
                              <a
                                href="/safety-family-center"
                                class="dd_nav-link is-new w-inline-block"
                                ><div>Family Center</div></a
                              ><a
                                href="/safety-library"
                                class="dd_nav-link is-new"
                                >Safety Library</a
                              ><a href="/safety-news" class="dd_nav-link is-new"
                                >Safety News</a
                              ><a
                                href="/safety-teen-charter"
                                class="dd_nav-link is-new w-inline-block"
                                ><div>Teen Charter</div></a
                              >
                            </div>
                          </div>
                          <div class="nav_dd_link-group">
                            <div class="nav_dd_link_list">
                              <div class="nav_dd_link_title is-new">Hubs</div>
                              <a
                                href="/safety-parents"
                                class="dd_nav-link is-new w-inline-block"
                                ><div>Parent Hub</div></a
                              ><a
                                href="/safety-policies"
                                class="dd_nav-link is-new w-inline-block"
                                ><div>Policy Hub</div></a
                              ><a
                                href="/safety-privacy"
                                class="dd_nav-link is-new w-inline-block"
                                ><div>Privacy Hub</div></a
                              ><a
                                href="/safety-transparency"
                                class="dd_nav-link is-new w-inline-block"
                                ><div>Transparency Hub</div></a
                              ><a
                                href="/safety-wellbeing"
                                class="dd_nav-link is-new w-inline-block"
                                ><div>Wellbeing Hub</div></a
                              >
                            </div>
                          </div>
                        </div>
                        <div class="nav_dd_list_bg"></div>
                      </div>
                    </nav>
                  </div>
                </li>
                <li>
                  <div
                    data-delay="0"
                    data-hover="false"
                    class="nav_dd w-dropdown"
                  >
                    <div class="nav_dd_trigger w-dropdown-toggle">
                      <div>Quests</div>
                      <div class="nav_dd_arrow w-embed">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12 6L8 10L4 6"
                            stroke="white"
                            stroke-opacity="0.5"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <nav class="nav_dd_list is-burger w-dropdown-list">
                      <div class="nav_dd_content-wr">
                        <div class="nav_dd_separator"></div>
                        <div class="nav_dd_content_layout">
                          <div class="nav_dd_link-group">
                            <a
                              href="https://discord.com/ads/quests"
                              class="nav_dd_link-group_title is-new"
                              >Quests</a
                            >
                            <div class="nav_dd_link_list">
                              <div class="nav_dd_link_title is-new">
                                Resources
                              </div>
                              <a
                                href="https://discord.com/ads/quests"
                                class="dd_nav-link is-new"
                                >Advertising</a
                              ><a
                                href="https://discord.com/ads/quests-success-stories"
                                class="dd_nav-link is-new"
                                >Success Stories</a
                              ><a
                                href="https://discord.com/ads/quests-faq"
                                class="dd_nav-link is-new"
                                >Quests FAQ</a
                              >
                            </div>
                          </div>
                        </div>
                        <div class="nav_dd_list_bg"></div>
                      </div>
                    </nav>
                  </div>
                </li>
                <li>
                  <div
                    data-delay="0"
                    data-hover="false"
                    class="nav_dd w-dropdown"
                  >
                    <div class="nav_dd_trigger w-dropdown-toggle">
                      <div>Support</div>
                      <div class="nav_dd_arrow w-embed">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12 6L8 10L4 6"
                            stroke="white"
                            stroke-opacity="0.5"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <nav class="nav_dd_list is-burger w-dropdown-list">
                      <div class="nav_dd_content-wr">
                        <div class="nav_dd_separator"></div>
                        <div class="nav_dd_content_layout">
                          <div class="nav_dd_link-group">
                            <a
                              href="https://support.discord.com/hc"
                              class="nav_dd_link-group_title is-new"
                              >Support</a
                            >
                            <div class="nav_dd_link_list">
                              <div class="nav_dd_link_title is-new">
                                Resources
                              </div>
                              <a
                                href="https://support.discord.com/hc"
                                class="dd_nav-link is-new"
                                >Help Center</a
                              ><a
                                href="https://support.discord.com/hc/en-us/community/topics"
                                class="dd_nav-link is-new"
                                >Feedback</a
                              ><a
                                href="https://support.discord.com/hc/en-us/requests/new"
                                class="dd_nav-link is-new"
                                >Submit a Request</a
                              >
                            </div>
                          </div>
                        </div>
                      </div>
                    </nav>
                  </div>
                </li>
                <li>
                  <div
                    data-delay="0"
                    data-hover="false"
                    class="nav_dd w-dropdown"
                  >
                    <div class="nav_dd_trigger w-dropdown-toggle">
                      <div>Blog</div>
                      <div class="nav_dd_arrow w-embed">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12 6L8 10L4 6"
                            stroke="white"
                            stroke-opacity="0.5"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <nav class="nav_dd_list is-burger w-dropdown-list">
                      <div class="nav_dd_content-wr">
                        <div class="nav_dd_separator"></div>
                        <div class="nav_dd_content_layout">
                          <div class="nav_dd_link-group">
                            <a
                              href="https://discord.com/blog"
                              class="nav_dd_link-group_title is-new"
                              >Blog</a
                            >
                            <div class="nav_dd_link_list">
                              <div class="nav_dd_link_title is-new">
                                Collections
                              </div>
                              <a
                                href="https://discord.com/blog"
                                class="dd_nav-link is-new"
                                >Featured</a
                              ><a
                                href="https://discord.com/category/community"
                                class="dd_nav-link is-new"
                                >Community</a
                              ><a
                                href="https://discord.com/category/company"
                                class="dd_nav-link is-new"
                                >Discord HQ</a
                              ><a
                                href="https://discord.com/category/engineering"
                                class="dd_nav-link is-new"
                                >Engineering &amp; Developers</a
                              ><a
                                href="https://discord.com/category/how-to-discord"
                                class="dd_nav-link is-new"
                                >How to Discord</a
                              ><a
                                href="https://discord.com/category/safety"
                                class="dd_nav-link is-new"
                                >Policy &amp; Safety</a
                              ><a
                                href="https://discord.com/category/product"
                                class="dd_nav-link"
                                >Product &amp; Features</a
                              >
                            </div>
                          </div>
                        </div>
                        <div class="nav_dd_list_bg"></div>
                      </div>
                    </nav>
                  </div>
                </li>
                <li>
                  <div
                    data-delay="0"
                    data-hover="false"
                    class="nav_dd w-dropdown"
                  >
                    <div class="nav_dd_trigger w-dropdown-toggle">
                      <div>Developers</div>
                      <div class="nav_dd_arrow w-embed">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12 6L8 10L4 6"
                            stroke="white"
                            stroke-opacity="0.5"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <nav class="nav_dd_list is-burger w-dropdown-list">
                      <div class="nav_dd_content-wr">
                        <div class="nav_dd_separator"></div>
                        <div class="nav_dd_content_layout">
                          <div class="nav_dd_link-group">
                            <a
                              href="https://discord.com/developers"
                              class="nav_dd_link-group_title is-new"
                              >Developers</a
                            >
                            <div class="nav_dd_link_list">
                              <div class="nav_dd_link_title is-new">
                                Featured
                              </div>
                              <a
                                href="https://discord.com/developers/gdc-2025"
                                class="dd_nav-link is-new w-inline-block"
                                ><div>GDC 2025</div></a
                              ><a
                                href="https://discord.com/developers/social-sdk"
                                class="dd_nav-link is-new w-inline-block"
                                ><div>Discord Social SDK</div></a
                              ><a
                                href="https://discord.com/developers/build"
                                class="dd_nav-link is-new w-inline-block"
                                ><div>Apps and Activities</div></a
                              >
                            </div>
                            <div class="nav_dd_link_line"></div>
                            <div class="nav_dd_link_list">
                              <div class="nav_dd_link_title is-new">
                                Documentation
                              </div>
                              <a
                                href="https://discord.com/developers"
                                class="dd_nav-link is-new w-inline-block"
                                ><div>Developer Home</div></a
                              ><a
                                href="https://discord.com/developers/docs/intro"
                                class="dd_nav-link is-new w-inline-block"
                                ><div>Developer Documentation</div>
                                <div class="nav_dd_link_arrow w-embed">
                                  <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M5 4H12M12 4V11M12 4L4 12"
                                      stroke="white"
                                      stroke-opacity="0.5"
                                      stroke-width="2"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                    ></path>
                                  </svg></div></a
                              ><a
                                href="https://discord.com/developers/applications"
                                class="dd_nav-link is-new w-inline-block"
                                ><div>Developer Applications</div>
                                <div class="nav_dd_link_arrow w-embed">
                                  <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M5 4H12M12 4V11M12 4L4 12"
                                      stroke="white"
                                      stroke-opacity="0.5"
                                      stroke-width="2"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                    ></path>
                                  </svg></div></a
                              ><a
                                href="https://support-dev.discord.com/hc/en-us"
                                class="dd_nav-link is-new w-inline-block"
                                ><div>Developer Help Center</div>
                                <div class="nav_dd_link_arrow w-embed">
                                  <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M5 4H12M12 4V11M12 4L4 12"
                                      stroke="white"
                                      stroke-opacity="0.5"
                                      stroke-width="2"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                    ></path>
                                  </svg></div
                              ></a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </nav>
                  </div>
                </li>
                <li>
                  <a href="https://discord.com/careers" class="nav_link"
                    >Careers</a
                  >
                </li>
              </ul>
              <div class="nav_burger_bottom">
                <a
                  href="https://discord.com/app"
                  data-track-nav="login"
                  data-track="login"
                  class="button-nav is-burger is-ghost login-button-js w-nav-brand"
                  ><div>Log In</div></a
                ><a
                  href="#"
                  data-track-download="Download Page"
                  class="button-nav is-burger download-button w-nav-brand"
                  ><div class="embed-center w-embed">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M9 1C9 0.447715 8.55228 0 8 0C7.44772 0 7 0.447715 7 1V7.58579L4.70711 5.29289C4.31658 4.90237 3.68342 4.90237 3.29289 5.29289C2.90237 5.68342 2.90237 6.31658 3.29289 6.70711L7.29289 10.7071C7.68342 11.0976 8.31658 11.0976 8.70711 10.7071L12.7071 6.70711C13.0976 6.31658 13.0976 5.68342 12.7071 5.29289C12.3166 4.90237 11.6834 4.90237 11.2929 5.29289L9 7.58579V1ZM2 12C2 11.4477 1.55228 11 1 11C0.447715 11 0 11.4477 0 12V13C0 14.6569 1.34315 16 3 16H13C14.6569 16 16 14.6569 16 13V12C16 11.4477 15.5523 11 15 11C14.4477 11 14 11.4477 14 12V13C14 13.5523 13.5523 14 13 14H3C2.44772 14 2 13.5523 2 13V12Z"
                        fill="black"
                      ></path>
                    </svg>
                  </div>
                  <div>App Store</div></a
                >
                <div class="nav_burger_bottom_grad"></div>
              </div>
            </div>
          </div>
          <div class="nav_burger_bottom_grad"></div>
        </div>
      </div>
    </div>
    <div class="nav_blur"></div>
  </header>
  <div class="section-rich">
    <div class="padding-menu"></div>
    <div class="container780 left-vert">
      <a href="/archive" class="archived-link is_new w-inline-block"
        ><div class="new-link-small">Archived Versions</div></a
      >
    </div>
    <div class="container780 left-vert">
      <div class="hi-wr">
        <h1 class="new-h1 is_new">Discord's Terms of Service</h1>
      </div>
      <div class="rich-terms_new w-richtext">
        <h4>Effective: April 15, 2024</h4>
        <h4>Last Updated: March 15, 2024</h4>
      </div>
      <a href="#" class="link-terms is_new w-inline-block"
        ><div class="menu-numbers">1.</div>
        <div>Who we are</div></a
      ><a href="#2" class="link-terms is_new w-inline-block"
        ><div class="menu-numbers">2.</div>
        <div>
          Age requirements and responsibility of parents and legal guardians
        </div></a
      ><a href="#3" class="link-terms is_new w-inline-block"
        ><div class="menu-numbers">3.</div>
        <div>What you can expect from us</div></a
      ><a
        href="#3"
        class="link-terms _30px is_new w-inline-block w-condition-invisible"
        ><div class="menu-numbers bl">•</div>
        <div class="w-dyn-bind-empty"></div></a
      ><a
        href="#3"
        class="link-terms _30px is_new w-inline-block w-condition-invisible"
        ><div class="menu-numbers bl">•</div>
        <div class="w-dyn-bind-empty"></div></a
      ><a
        href="#3"
        class="link-terms _30px is_new w-inline-block w-condition-invisible"
        ><div class="menu-numbers bl">•</div>
        <div class="w-dyn-bind-empty"></div></a
      ><a href="#4" class="link-terms is_new w-inline-block"
        ><div class="menu-numbers">4.</div>
        <div>Your Discord account</div></a
      ><a href="#5" class="link-terms is_new w-inline-block"
        ><div class="menu-numbers">5.</div>
        <div>Content in Discord’s services</div></a
      ><a href="#5" class="link-terms _30px w-inline-block"
        ><div class="menu-numbers bl">•</div>
        <div>Your Content</div></a
      ><a href="#5" class="link-terms _30px w-inline-block"
        ><div class="menu-numbers bl">•</div>
        <div>Discord’s content</div></a
      ><a href="#5" class="link-terms _30px w-inline-block"
        ><div class="menu-numbers bl">•</div>
        <div>Other content</div></a
      ><a href="#6" class="link-terms is_new w-inline-block"
        ><div class="menu-numbers">6.</div>
        <div>Software in Discord’s services</div></a
      ><a href="#7" class="link-terms is_new w-inline-block"
        ><div class="menu-numbers">7.</div>
        <div>Copyright</div></a
      ><a href="#8" class="link-terms is_new w-inline-block"
        ><div class="menu-numbers">8.</div>
        <div>Discord’s paid services</div></a
      ><a href="#9" class="link-terms is_new w-inline-block"
        ><div class="menu-numbers">9.</div>
        <div>Restrictions on your use of Discord’s services</div></a
      ><a href="#10" class="link-terms is_new w-inline-block"
        ><div class="menu-numbers">10.</div>
        <div>Termination</div></a
      ><a href="#11" class="link-terms is_new w-inline-block"
        ><div class="menu-numbers">11.</div>
        <div>Appeals</div></a
      ><a href="#12" class="link-terms is_new w-inline-block"
        ><div class="menu-numbers">12.</div>
        <div>Indemnity</div></a
      ><a href="#13" class="link-terms is_new w-inline-block"
        ><div class="menu-numbers">13.</div>
        <div>Services “AS IS”</div></a
      ><a href="#14" class="link-terms is_new w-inline-block"
        ><div class="menu-numbers">14.</div>
        <div>Data Charges</div></a
      ><a href="#15" class="link-terms is_new w-inline-block"
        ><div class="menu-numbers">15.</div>
        <div>Limitation of liability</div></a
      ><a href="#16" class="link-terms is_new w-inline-block"
        ><div class="menu-numbers">16.</div>
        <div>Settling disputes between you and Discord</div></a
      ><a href="#17" class="link-terms is_new w-inline-block"
        ><div class="menu-numbers">17.</div>
        <div>More important stuff</div></a
      >
      <div class="rich-guidlines-negative_new w-richtext">
        <p>
          Welcome! Discord is the best place to talk, hang out and have fun with
          friends online. We’re happy you’re here.
        </p>
        <p>
          These terms set forth our legal obligations to each other. They apply
          to your use of our services.
        </p>
        <p>
          ‍<strong>IMPORTANT NOTE: The section titled “</strong
          ><a href="https://discord.com/terms#16"
            ><strong>Settling Disputes Between You and Discord</strong></a
          ><strong
            >” contains an arbitration clause and class-action waiver that
            applies to all U.S.-based Discord users. Please read this section
            carefully as it may significantly affect your legal rights,
            including your right to file a lawsuit in court.</strong
          >
        </p>
        <p>
          When we say “Discord,” “we,” “us,” and “our” in these terms, we mean
          Discord Inc., its subsidiaries, and its related companies.
        </p>
        <p>
          When we say “services” in these terms, we mean Discord’s services,
          apps, websites, and other products.
        </p>
        <p>
          When we say “you” or “your,” we mean you. If you’re accessing our
          services on behalf of a legal entity (like your employer), you agree
          that you have the authority to bind that entity to these terms, and
          “you” and “your” will refer to that entity.
        </p>
        <p>
          We also have a
          <a href="https://discord.com/privacy">Privacy Policy</a>,
          <a href="https://discord.com/guidelines">Community Guidelines</a>, and
          these
          <a href="https://support.discord.com/hc/articles/4420312247575"
            >other policies</a
          >
          that apply to your use of our services and are incorporated into these
          terms. You should read these policies—we’ve worked hard to make them
          simple and clear, and they contain important information about your
          use of our services. If you use our API, Discord’s
          <a href="https://discord.com/developers/docs/legal"
            >Developer Terms of Service</a
          >
          and
          <a href="https://discord.com/developers/docs/policy"
            >Developer Policy</a
          >
          apply to that use. Discord’s
          <a href="https://discord.com/terms/paid-services-terms"
            >Paid Services Terms</a
          >
          apply to any purchase you make through Discord, and Discord’s
          <a
            href="https://support.discord.com/hc/en-us/articles/5330075836311-Monetization-Terms"
            >Monetization Terms</a
          >
          apply to any sales you make through Discord.
        </p>
        <p>
          Together, these rules make Discord possible, and they matter to us. If
          you believe others aren’t following them, please let us know
          <a
            href="https://discord.com/safety/360044103651-reporting-abusive-behavior-to-discord"
            >by reporting it to us</a
          >.
        </p>
      </div>
      <div id="1" class="rich-guidlines-negative_new w-richtext">
        <h2>Who we are</h2>
        <p>
          We provide services that allow you to interact with other Discord
          users (such as through direct messages and group direct messages) and
          participate in large and small spaces (or “servers”). Our services may
          also include access to certain software, features, and content,
          including items that you can purchase from us or others. Additional
          <a href="https://discord.com/terms/paid-services-terms">terms</a> may
          apply to those purchases.
        </p>
        <p>
          Discord Inc. is located at 444 De Haro Street #200, San Francisco, CA
          94107, USA. Discord Netherlands B.V. is located at Schiphol Boulevard
          195, 1118 BG Schiphol, Netherlands.
        </p>
      </div>
      <div id="2" class="rich-guidlines-negative_new w-richtext">
        <h2>
          Age requirements and responsibility of parents and legal guardians
        </h2>
        <p>
          By accessing our services, you confirm that you’re at least 13 years
          old and meet the minimum age required by the laws in your country. We
          maintain a
          <a href="https://support.discord.com/hc/en-us/articles/360040724612"
            >list of minimum ages</a
          >
          around the world as a resource for you, but we aren’t able to
          guarantee that it is always accurate. If you are old enough to access
          our services in your country, but not old enough to have authority to
          consent to our terms, your parent or legal guardian must agree to our
          terms on your behalf. Please ask your parent or legal guardian to read
          these terms with you. If you’re a parent or legal guardian, and you
          allow your child (who must meet the minimum age for your country) to
          use the services, then these terms also apply to you and you’re
          responsible for your child’s activity on the services, including
          purchases made by them. For more information on purchases, see
          “Discord’s Paid Services” below.
        </p>
      </div>
      <div id="3" class="rich-guidlines-negative_new w-richtext">
        <h2>What you can expect from us</h2>
        <p>
          Discord is the best place to talk, hang out and have fun with friends
          online. To do that, we provide different digital spaces where you can
          connect with other Discord users and communities. Discord users
          communicate primarily via “servers,” which are digital spaces made up
          of different types of channels. Text channels allow users to interact
          via text-based messages, as well as images, GIFs, emoji, and other
          uploadable media. Voice channels allow users to communicate by voice
          and/or streaming video. Users can also communicate one-to-one using
          direct messages, or communicate with a limited number of users via
          group direct messages. We’re always evolving our services, and we may
          create other types of spaces in the future!
        </p>
        <p>
          Users create servers, and users choose which servers to join and who
          their “friends” are. All users must follow our
          <a href="http://discord.com/guidelines">Community Guidelines</a> and
          <a
            href="https://support.discord.com/hc/en-us/articles/4420312247575-Additional-Terms-and-Policies"
            >other policies</a
          >, but in Servers, the server owners and server admins control the
          server permissions and additional rules, including establishing
          membership requirements and creating custom roles and what those roles
          can do within the server. Server owners and admins also control
          whether to make their server available in Server Discovery, whether to
          publish their server invite link on public websites, whether to enable
          community growth and safety features, and whether to add bots or other
          apps. These permissions, like the size of a server, may change over
          time.
        </p>
        <p>
          Discord is designed to make communicating with the people you want to
          speak to as easy as possible. Posts appear in text channels in the
          order in which they’re made. Voice and video communication happens in
          real time. We may build features that help you create content and
          communicate with others, join conversations more easily, or may
          highlight content and activity available to you on Discord that might
          be of interest. Discord was also designed to make it easy to share
          what you’re up to. You can stream what you’re doing on your device, or
          you can share your status, including what game you're playing, what
          song you’re listening to (if you link a music account), and more.
          Sharing gameplay is fundamental to the Discord experience, so it’s
          turned on by default. You can turn it off in your Settings at any
          time, and you’re in control of whether or not you connect other
          accounts to Discord.
        </p>
        <p>
          Discord’s services may be personalized to each user based on their
          activity, so that you can see content and communities that may be of
          interest to you. You can control whether and to what extent Discord
          personalizes your experience in your Settings.&nbsp;
        </p>
        <p>
          We’re actively developing new features and products to improve
          Discord. As part of these efforts, we may add or remove features,
          start offering new services, or stop offering some services entirely
          (or just in some places or for some users) if they no longer make
          sense from a business perspective or create risk for Discord, our
          users, or other third parties. While we try to avoid disruptions, we
          cannot guarantee that there will not be an outage or change to the
          services, and your content may not be retrievable due to such outages
          or changes. We are not liable for any such outages or service changes.
        </p>
      </div>
      <div id="4" class="rich-guidlines-negative_new w-richtext">
        <h2>Your Discord account</h2>
        <p>
          To access the services on an ongoing basis, you will need to create a
          Discord account. You can provide a username and password, and a way of
          contacting you (such as an email address and/or phone number). You’ll
          also need to provide your birthday. In some cases, you may be required
          to verify your account or provide additional information.&nbsp;
        </p>
        <p>
          You are responsible for the security of your account, and you agree to
          <a
            href="https://support.discord.com/hc/en-us/requests/new?ticket_form_id=360000029212"
            >notify us</a
          >
          immediately if you believe your account has been compromised. If you
          use a password, it must be strong, and we (strongly) recommend that
          you use that password only for your Discord account and that you
          enable two-factor authentication.&nbsp;
        </p>
        <p>
          You must always provide accurate information to Discord and maintain
          the accuracy of the information associated with your account. We may
          assume that any communications we’ve received from your account or the
          associated contact information have been made by you, and that any
          purchases made using your account were made by you.&nbsp;
        </p>
        <p>
          If you get locked out of your account, we’ll need to contact you at
          the email or phone number associated with your account. If your
          account is compromised or you no longer have access to your email
          account or phone number, we may not be able to restore your access to
          your account or the servers you’ve created.&nbsp;
        </p>
        <p>
          You agree not to license, sell, lend, or transfer your account,
          Discord username, vanity URL, or other unique identifier without our
          prior written approval. We also reserve the right to delete, change,
          or reclaim your username, URL, or other identifier.
        </p>
      </div>
      <div id="5" class="rich-guidlines-negative_new w-richtext">
        <h2>Content in Discord’s services</h2>
        <h4>Your Content</h4>
        <p>
          When we say “your content” in these terms, we mean all the things you
          add (upload, post, share, stream, etc.) to our services. This includes
          text, links, GIFs, emoji, photos, videos, documents, or other media.
          If we come up with another way for you to add content to the services,
          it includes that too.
        </p>
        <p>
          You don’t have any obligation to add content to the services. If you
          choose to add content to the services, you are responsible for
          ensuring that you have the right to do so, that you have the right to
          grant the licenses in this section of these terms, and that your
          content is lawful. We take no responsibility for any of your content,
          and we are not responsible for others’ use of your content.
        </p>
        <p>
          Our services allow users to add content in a number of different ways,
          including via direct messages, group direct messages, and in small and
          large servers. Some of these servers may be larger spaces, and if you
          share content within them, that content may be more likely to be
          accessed by a lot of people. For example, some servers are available
          in the Server Discovery section of the app and do not require an
          invite link to join. Other server owners may publish their server
          invite link on public websites. Anyone can access these spaces. You
          should be aware that these permissions are set by server owners or
          admins, and they may change over time. Please understand where you are
          posting on Discord, familiarize yourself with the relevant server
          permissions when joining and posting in a certain space, and choose
          the right space, features, and settings for you and your
          content.&nbsp;
        </p>
        <p>
          Your content is yours, but you give us a license to it when you use
          Discord. Your content may be protected by certain intellectual
          property rights. We don’t own those. But by using our services, you
          grant us a license—which is a form of permission—to do the following
          with your content, in accordance with applicable legal requirements,
          in connection with operating, developing, and improving our services:
        </p>
        <ul role="list">
          <li>
            Use, copy, store, distribute, and communicate your content in
            manners consistent with your use of the services. (For example, so
            we can store and display your content.)
          </li>
          <li>
            Publish, publicly perform, or publicly display your content if
            you’ve chosen to make it visible to others. (For example, so we can
            display your messages if you post them in certain servers or
            recommend that content to others.)
          </li>
          <li>
            Monitor, modify, translate, and reformat your content. (For example,
            so we can resize an image you post to fit on a mobile device.)
          </li>
          <li>
            Sublicense your content, to allow our services to work as intended.
            (For example, so we can store your content with our cloud service
            providers.)
          </li>
        </ul>
        <p>
          This license is worldwide, non-exclusive (which means you can still
          license your content to others), royalty-free (which means there are
          no fees for this license), transferable, and perpetual.
        </p>
        <p>
          We reserve the right to block, remove, and/or permanently delete your
          content if it is in breach of these terms, our
          <a href="https://discord.com/guidelines">Community Guidelines</a>, our
          <a href="https://support.discord.com/hc/articles/4420312247575"
            >other policies</a
          >, or any applicable law or regulation, or if it creates risk for
          Discord or negatively impacts the experience or interests of other
          Discord users to continue to make it available.
        </p>
        <p>
          We
          <a
            href="https://support.discord.com/hc/en-us/requests/new?ticket_form_id=360000029212"
            >welcome feedback</a
          >
          on our services. By sending us feedback, you grant us a non-exclusive,
          perpetual, irrevocable, transferable license to use the feedback and
          ideas generated from the feedback without any restrictions,
          attribution, or compensation to you.
        </p>
        <h4>Discord’s content</h4>
        <p>
          Our services include some content that belongs to us, such as the
          design of our apps and websites, our art and images, and content
          written by us. You may use our software as outlined in these terms.
          You may only use our trademarks (or other brand indicia) and
          copyrights as permitted in our
          <a href="https://discord.com/branding">Brand Guidelines</a> or with
          our prior written permission. We retain all intellectual property
          rights in our content.&nbsp;
        </p>
        <h4>Other content</h4>
        <p>
          Other people’s content. Our services might also provide you with
          access to other people’s content. You may not use this content without
          that person’s consent, or as allowed by law. Other people’s content is
          theirs and doesn’t necessarily reflect Discord’s own views. Discord
          doesn’t endorse or verify the accuracy or reliability of content
          shared by Discord users. We work hard to try to make Discord a safe,
          positive, and inclusive place, but cannot always prevent you from
          encountering content that you may find objectionable or offensive. You
          agree we will not be liable for any harm caused by that content. You
          may
          <a
            href="https://discord.com/safety/360044103651-reporting-abusive-behavior-to-discord"
            >report content</a
          >
          that you think violates any of our policies. We have the right, but
          not the obligation, to review such reports and block or remove content
          at our discretion.
        </p>
        <p>
          Third party features and content. Our services may also allow you to
          access third-party websites, features, apps, or other content. We
          provide you access only as a convenience to you, and are not
          responsible for the content or services available from these websites
          or resources.
        </p>
      </div>
      <div id="6" class="rich-guidlines-negative_new w-richtext">
        <h2>Software in Discord’s services</h2>
        <p>
          License to our software. Some of our services allow you to download
          client software. So long as you comply with these terms, we grant you
          a worldwide, non-exclusive, personal, and non-assignable license to
          download, install, and run that software, solely to access our
          services.
        </p>
        <p>
          You may not copy, modify, create derivative works based upon,
          distribute, sell, lease, or sublicense any of our software or
          services. You also may not reverse engineer or decompile our software
          or services, attempt to do so, or assist anyone in doing so, unless
          you have our written consent or applicable law permits it.
        </p>
        <p>
          Although we are granting you this license, we retain any intellectual
          property rights we have in our software and services.
        </p>
        <p>
          Open source. Some of Discord’s services
          <a href="https://discord.com/acknowledgements">include software</a>
          subject to separate
          <a href="https://discord.com/licenses">open source license terms</a>,
          and your use of those services are subject to your compliance with
          those license terms, when applicable. We encourage you to review them,
          as some licenses may explicitly override these terms.
        </p>
        <p>
          Third-Party Services. Discord may allow you to access apps, bots, or
          other products, features, or services developed by third parties
          (“third-party services”). It’s your choice whether to use these
          third-party services and whether to participate in Discord servers
          that incorporate them. You should review any terms and policies
          provided by the third parties before doing so as they govern your use
          of their services. While these third parties do need to follow all
          policies that apply to them (which may include these Terms, our
          <a href="https://discord.com/guidelines">Community Guidelines</a>,
          <a href="https://discord.com/developers/docs/legal"
            >Developer Terms of Service</a
          >, and
          <a href="https://discord.com/developers/docs/policy"
            >Developer Policy</a
          >), Discord is not responsible for any third-party services.
        </p>
      </div>
      <div id="7" class="rich-guidlines-negative_new w-richtext">
        <h2>Copyright</h2>
        <p>
          We respect the intellectual property of others and expect our users to
          do the same. See our
          <a href="https://support.discord.com/hc/articles/4410339349655"
            >Copyright &amp; IP Policy</a
          >
          for information on how to file a copyright complaint.
        </p>
      </div>
      <div id="8" class="rich-guidlines-negative_new w-richtext">
        <h2>Discord’s paid services</h2>
        <p>
          We won’t charge you a fee to use the basic functionality of our
          services, but you may be able to pay for additional features and
          products. Discord’s
          <a href="https://discord.com/terms/paid-services-terms"
            >Paid Services Terms</a
          >
          also apply to any purchase you make using Discord’s supported purchase
          flows, and you may also be asked to agree to separate terms such as
          our Monetization Terms before purchasing or selling new offerings
          through Discord.
        </p>
      </div>
      <div id="9" class="rich-guidlines-negative_new w-richtext">
        <h2>Restrictions on your use of Discord’s services</h2>
        <p>
          When using our services, you must comply with these terms and all
          applicable laws, rules, and regulations, and you must only use the
          services for authorized and acceptable purposes. You must also adhere
          to our
          <a href="https://discord.com/guidelines">Community Guidelines</a> and
          <a href="https://support.discord.com/hc/articles/4420312247575"
            >other policies</a
          >, which contain more detailed rules about your content and behavior
          when using Discord and how we enforce them on Discord. Fundamentally,
          do not do, try to do, or encourage or help others to do any of the
          following:
        </p>
        <ul role="list">
          <li>
            <strong
              >Don’t use the services to do harm to yourself or others.</strong
            >
            Among other things, this includes trying to gain access to another
            user’s account or any non-public portions of the services,
            infringing anyone else’s intellectual property rights or any other
            proprietary rights, exploiting, harassing, bullying, spamming,
            auto-messaging, or auto-dialing people through our services.
          </li>
          <li>
            <strong>Don’t use the services to do harm to Discord.</strong> Among
            other things, this includes trying to gain access to or attacking
            our systems, scraping our services&nbsp;without our written consent,
            transmitting viruses or other malicious code to our services,
            abusing or defrauding us or our payment systems, copying our product
            or using our intellectual property without permission, and misusing
            our reporting or customer service mechanisms.
          </li>
          <li>
            <strong
              >Don’t use the services to do anything else that’s
              illegal.</strong
            >
            This includes using the services to plan or commit any crime or do
            anything else that is illegal.
          </li>
        </ul>
        <p>
          We encourage you to
          <a
            href="https://support.discord.com/hc/en-us/articles/360000291932-How-to-Properly-Report-Issues-to-Trust-Safety"
            >report content</a
          >
          or conduct that you believe violates these restrictions. You can learn
          more about our approach to safety and content moderation in our
          <a
            href="https://discord.com/safety/our-approach-to-content-moderation"
            >Safety Center</a
          >.
        </p>
      </div>
      <div id="10" class="rich-guidlines-negative_new w-richtext">
        <h2>Termination</h2>
        <p>
          Your right to terminate. You’re free to stop using Discord’s services
          at any time and for any reason. To terminate this agreement, you may
          delete your Discord account through the Settings page in the Discord
          app (the gear icon next to your username) and discontinue use of the
          services. Certain provisions of these terms will survive termination
          as outlined below in the “Survival” section.<br /><br />Disabling your
          account limits the processing of your personal information as
          described in our
          <a href="https://discord.com/privacy">Privacy Policy</a>. Disabling
          your account does not terminate this agreement.
        </p>
        <p>
          Our right to terminate. Subject to applicable law, we reserve the
          right to suspend or terminate your account and/or your access to some
          or all of our services with or without notice, at our discretion for
          any reason, or for the following reasons:
        </p>
        <ul role="list">
          <li>
            You breach these terms, our
            <a href="https://discord.com/guidelines">Community Guidelines</a>,
            our
            <a href="https://support.discord.com/hc/articles/4420312247575"
              >other policies</a
            >, or additional terms that apply to specific products.
          </li>
          <li>
            We’re required to do so to comply with a legal requirement or court
            order.
          </li>
          <li>
            We reasonably believe termination is necessary to prevent harm to
            you, us, other users, or third parties.
          </li>
          <li>Your account has been inactive for more than two years.</li>
          <li>
            Continuing to allow your account to be active, giving you access to
            some or all services, or hosting your content creates risk for
            Discord, other users, or third parties.
          </li>
        </ul>
        <p>
          However, we will give you advance notice if reasonable to do so or
          required by applicable law.
        </p>
      </div>
      <div id="11" class="rich-guidlines-negative_new w-richtext">
        <h2>Appeals</h2>
        <p>
          We value transparency and work hard to give you context for the
          decisions we make. You can appeal any enforcement action we take under
          these terms or other policies, including terminations, suspensions, or
          content removals through this
          <a href="https://dis.gd/request">form</a> or available
          <a
            href="https://discord.com/safety/360044103651-reporting-abusive-behavior-to-discord"
            >in-app options</a
          >. If you reside in the European Economic Area, your appeal must be
          submitted within six months of the relevant decision.
        </p>
      </div>
      <div id="12" class="rich-guidlines-negative_new w-richtext">
        <h2>Indemnity</h2>
        <p>
          If you are using the services on behalf of a business or legal entity
          and not in an individual capacity, then you will indemnify and hold
          Discord and its officers, directors, employees and agents harmless
          from and against any claims, liabilities, damages, and costs
          (including reasonable legal and accounting fees) related to (a) your
          access to or use of our services, (b) your content, or (c) your
          violation of these terms.
        </p>
      </div>
      <div id="13" class="rich-guidlines-negative_new w-richtext">
        <h2>Services “AS IS”</h2>
        <p>
          We work hard to offer great services, but there are certain aspects
          that we can’t guarantee. TO THE FULLEST EXTENT PERMITTED BY LAW,
          DISCORD, ITS AFFILIATES, AND THEIR RESPECTIVE SUPPLIERS MAKE NO
          WARRANTIES, EITHER EXPRESS OR IMPLIED, ABOUT THE SERVICES. THE
          SERVICES ARE PROVIDED “AS IS.” WE ALSO DISCLAIM ANY IMPLIED WARRANTIES
          OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, QUIET ENJOYMENT,
          AND NON-INFRINGEMENT, AND ANY WARRANTIES ARISING OUT OF COURSE OF
          DEALING OR USAGE OF TRADE. THE LAWS OF CERTAIN JURISDICTIONS OR STATES
          DO NOT ALLOW LIMITATIONS ON IMPLIED WARRANTIES. TO THE EXTENT SUCH
          WARRANTIES CANNOT BE DISCLAIMED UNDER THE LAWS OF YOUR JURISDICTION,
          WE LIMIT THE DURATION AND REMEDIES OF SUCH WARRANTIES TO THE FULL
          EXTENT PERMISSIBLE UNDER THOSE LAWS.
        </p>
      </div>
      <div id="14" class="rich-guidlines-negative_new w-richtext">
        <h2>Data Charges</h2>
        <p>
          You are responsible for any mobile charges that you may incur for
          using our services. This includes data charges and charges for
          messaging, such as SMS, MMS, or other messaging protocols or
          technologies. If you are not sure what you may be charged, you should
          ask your mobile service provider before using our services.
        </p>
      </div>
      <div id="15" class="rich-guidlines-negative_new w-richtext">
        <h2>Limitation of liability</h2>
        <p>
          WE DON’T EXCLUDE OR LIMIT OUR LIABILITY TO YOU WHERE IT WOULD BE
          ILLEGAL TO DO SO. IN COUNTRIES WHERE THE BELOW TYPES OF EXCLUSIONS
          AREN’T ALLOWED, WE’RE RESPONSIBLE TO YOU ONLY FOR LOSSES AND DAMAGES
          THAT ARE A REASONABLY FORESEEABLE RESULT OF OUR FAILURE TO USE
          REASONABLE CARE AND SKILL OR OUR MATERIAL<strong> </strong>BREACH OF
          OUR CONTRACT WITH YOU. THIS PARAGRAPH DOESN’T AFFECT CONSUMER RIGHTS
          THAT CAN’T BE WAIVED OR LIMITED BY ANY CONTRACT OR AGREEMENT.
        </p>
        <p>
          THE INFORMATION PRESENTED ON OR THROUGH THE SERVICES IS MADE AVAILABLE
          SOLELY FOR INFORMATIONAL PURPOSES. WE DO NOT CONFIRM THE ACCURACY,
          COMPLETENESS, OR USEFULNESS OF THE INFORMATION. ANY RELIANCE YOU PLACE
          ON SUCH INFORMATION IS SOLELY AT YOUR OWN RISK.
        </p>
        <p>
          IN COUNTRIES WHERE EXCLUSIONS OR LIMITATIONS OF LIABILITY ARE ALLOWED,
          NEITHER DISCORD, ITS AFFILIATES, NOR OUR SUPPLIERS INVOLVED IN
          CREATING, PRODUCING, OR DELIVERING THE SERVICES WILL BE LIABLE, TO THE
          MAXIMUM EXTENT PERMITTED UNDER APPLICABLE LAW, FOR ANY INCIDENTAL,
          SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES, OR DAMAGES FOR LOST
          PROFITS, LOST REVENUES, LOST SAVINGS, LOST BUSINESS OPPORTUNITY, LOSS
          OF DATA OR GOODWILL, SERVICE INTERRUPTION, COMPUTER DAMAGE OR SYSTEM
          FAILURE, OR THE COST OF SUBSTITUTE SERVICES OF ANY KIND ARISING OUT OF
          OR IN CONNECTION WITH THESE TERMS OR FROM THE USE OF OR INABILITY TO
          USE THE SERVICES, WHETHER BASED ON WARRANTY, CONTRACT, STATUTE, TORT
          (INCLUDING NEGLIGENCE), PRODUCT LIABILITY, OR ANY OTHER LEGAL THEORY,
          AND WHETHER OR NOT DISCORD OR ITS SUPPLIERS HAVE BEEN INFORMED OF THE
          POSSIBILITY OF SUCH DAMAGE, EVEN IF A LIMITED REMEDY PROVIDED IN THESE
          TERMS IS FOUND TO HAVE FAILED OF ITS ESSENTIAL PURPOSE.
        </p>
        <p>
          BESIDES THE TYPES OF LIABILITY WE CANNOT LIMIT BY LAW (AS DESCRIBED IN
          THIS SECTION), DISCORD LIMITS OUR LIABILITY TO YOU TO THE GREATER OF
          (A) THE AMOUNTS YOU HAVE PAID US IN THE THREE MONTHS BEFORE YOU FIRST
          ASSERT A CLAIM OR (B) $100 USD (OR THE EQUIVALENT IN YOUR LOCAL
          CURRENCY).
        </p>
        <p>
          DISCORD ISN’T LIABLE FOR THE CONDUCT OR CONTENT, WHETHER ONLINE OR
          OFFLINE, OF ANY USER OF OUR SERVICES.
        </p>
        <p>
          THE EXCLUSIONS AND LIMITATIONS OF DAMAGES SET FORTH ABOVE ARE
          FUNDAMENTAL ELEMENTS OF THE BASIS OF THE BARGAIN BETWEEN DISCORD AND
          YOU. THE LIMITATION OF LIABILITY DESCRIBED ABOVE SHALL APPLY FULLY TO
          RESIDENTS OF NEW JERSEY.
        </p>
      </div>
      <div id="16" class="rich-guidlines-negative_new w-richtext">
        <h2>Settling disputes between you and Discord</h2>
        <p>
          <strong>Informal resolution.</strong>&nbsp; Most disputes can be
          resolved informally, so if you have an issue with the services, you
          agree to reach out to us before initiating a lawsuit or arbitration.
          This requires emailing
          <a href="mailto:disputes@discordapp.com">disputes@discordapp.com</a> a
          written notice (“Written Notice”), which must include: (1) your name;
          (2) the email address or phone number associated with your Discord
          account; (3) a detailed description of the issue; and (4) how you’d
          like to resolve it.&nbsp; If the dispute is not resolved within sixty
          (60) days after receipt of the Written Notice, you and Discord agree
          to resolve any remaining dispute through further informal discussions
          or one of the formal dispute resolution provisions below.&nbsp; You
          must engage in this informal resolution process before starting any
          formal dispute resolution unless exempted by law. Applicable statutes
          of limitations and due dates for arbitration filing fees or other
          deadlines will be tolled upon receipt of the Written Notice to
          disputes@discordapp.com, while the parties attempt informal
          resolution.
        </p>
        <p>
          If you reside in the European Union, you may also be entitled to
          submit your complaint to the
          <a
            href="https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home2.show&amp;lng=EN"
            >European Commission’s Online Dispute Resolution (ODR) Platform</a
          >
          or the Out-of-Court Dispute Settlement (“OCDS”) mechanism under DSA
          Article 21. ODR allows EU consumers to resolve disputes related to the
          online purchases of goods and services without going to court.&nbsp;
          Note that a submission to the ODR or via the OCDS mechanism alone,
          without submitting a Written Notice to
          <a href="mailto:disputes@discordapp.com">disputes@discordapp.com</a>,
          will not toll the applicable statutes of limitations or other
          deadlines.
        </p>
        <p>
          <strong>Governing law and jurisdiction.</strong> The Federal
          Arbitration Act, federal arbitration law, and California law will
          apply to these terms and any disputes related to these terms or our
          services, regardless of conflict of laws rules. Any dispute that is
          not subject to arbitration will be resolved exclusively in the state
          or federal courts in San Francisco County, California, and you and
          Discord both consent to venue and personal jurisdiction in these
          courts.
        </p>
        <p>
          If you are a consumer residing in the European Union, this clause and
          these terms in general do not affect any mandatory consumer rights you
          may have under your local law, and all disputes arising in connection
          with the services and/or these terms shall be submitted to the
          exclusive jurisdiction of the court of Amsterdam, the Netherlands or,
          if you are a consumer, to a court closer to your domicile if in an EU
          Member State.
        </p>
        <p><strong>Agreement to arbitrate.</strong></p>
        <p>
          ‍IF YOU’RE A U.S. RESIDENT, YOU ALSO AGREE TO THE FOLLOWING MANDATORY
          ARBITRATION PROVISIONS.&nbsp; PLEASE READ THIS SECTION CAREFULLY – IT
          MAY SIGNIFICANTLY AFFECT YOUR LEGAL RIGHTS, INCLUDING YOUR RIGHT TO
          FILE A LAWSUIT IN COURT:
        </p>
        <p>
          You and Discord agree that the U.S. Federal Arbitration Act governs
          the interpretation and enforcement of these arbitration provisions.
          Except for the circumstances described below, and only after the
          parties have engaged in a good-faith, but unsuccessful, effort to
          resolve the dispute in accordance with the “informal resolution”
          process (above), you and Discord agree to resolve any dispute,
          disagreement, or claim relating to these terms or our services through
          final and binding arbitration in the U.S. county where you
          reside.&nbsp; This includes claims that arose, were asserted, or
          involve facts occurring before the existence of this arbitration
          agreement or any prior agreement as well as claims that may arise
          after the termination of this arbitration agreement, in accordance
          with the notice and opt-out provisions set forth in section.&nbsp;
        </p>
        <p>
          <strong>‍Arbitration rules.</strong> The arbitration will be conducted
          by a single arbitrator, governed by these terms and the American
          Arbitration Association Rules, excluding any rules or procedures
          governing or permitting class or representative actions (the “AAA
          Rules”), available at https://www.adr.org/active-rules. These terms
          will govern if there’s a conflict between these terms and the AAA
          Rules.&nbsp; To begin the arbitration proceeding, either party must
          submit a written Demand for Arbitration (available at www.adr.org)
          with the AAA and provide a copy to the other party as specified in the
          AAA Rules.&nbsp; To provide notice to Discord, please send an email
          with the subject line “Arbitration Demand” to disputes@discordapp.com.
        </p>
        <p>
          If the amount in controversy does not exceed $10,000, and you do not
          seek injunctive or declaratory relief, then the arbitration will be
          conducted solely on the basis of documents you and Discord submit to
          the arbitrator, unless the arbitrator determines that a hearing is
          necessary. If the amount in controversy exceeds $10,000 or seeks
          declaratory or injunctive relief, either party may request (or the
          arbitrator may determine) to hold a hearing, which may be in-person,
          videoconference, or telephone conference.&nbsp;
        </p>
        <p>
          <strong>‍Arbitration costs.</strong> AAA sets forth fees for its
          services, which are available at
          www.adr.org/sites/default/files/Consumer-Fee_Schedule.pdf. If Discord
          is the party initiating an arbitration against you, Discord will pay
          all costs associated with the arbitration, including the entire filing
          fee. If you initiate an arbitration against Discord, you will be
          responsible for the first $100 toward the nonrefundable Initial Filing
          Fee, unless the arbitrator determines that you are unable to pay, in
          which case Discord will pay the entire filing fee. For cases seeking
          less than $75K, Discord will pay the remainder of the Initial Filing
          Fee and both parties’ Administrative fees (unless the arbitrator finds
          your claims, defenses, or other fee-generating activity to be
          conducted for an improper purpose or frivolous (under the standard set
          forth in Federal Rule of Civil Procedure 11).&nbsp; For cases seeking
          more than $75K, fees and costs will be determined in accordance with
          AAA Rules.&nbsp;
        </p>
        <p>
          In all arbitrations, unless otherwise required by law or the AAA
          Rules, you’re responsible for all other additional arbitration costs
          incurred, including attorney’s fees and expert witness costs. The
          parties agree that AAA has discretion to modify the amount or timing
          of any administrative or arbitration fees due under AAA’s Rules where
          it deems appropriate, provided that such modification does not
          increase the costs to you, and you waive any objection to such fee
          modification. The parties also agree that a good-faith challenge by
          either party to the fees imposed by AAA does not constitute a default,
          waiver, or breach of this Section while such challenge remains pending
          before AAA, the arbitrator, and/or a court of competent jurisdiction.
        </p>
        <p>
          <strong>Offer of Judgment.</strong> At least 14 days before the date
          set for an arbitration hearing, any party may serve an offer in
          writing upon the other party to allow judgment on specified terms. If
          the offer made by the offering party is not accepted by the other
          party, and the other party fails to obtain a more favorable award, the
          other party will not recover its post-offer costs and will pay the
          offering party’s costs from the time of the offer.
        </p>
        <p>
          <strong>Arbitration Decision.</strong> The decision of the arbitrator
          will be in writing and binding on you and Discord, and judgment to
          enforce the decision may be entered by any court of competent
          jurisdiction. You and Discord agree that dispositive motions will be
          allowed in the arbitration. Except as explicitly set forth in this
          arbitration section, the arbitrator, and not any federal, state or
          local court or agency, shall have exclusive authority to resolve all
          disputes arising out of or relating to the interpretation,
          applicability, enforceability or formation of these terms of service,
          including, but not limited to any claim that all or any part of these
          terms of service are void or voidable, whether a claim is subject to
          arbitration, and any dispute regarding the payment of AAA or
          arbitrator fees (including the timing of such payments and remedies
          for nonpayment). The arbitrator must follow these terms and can award
          the same damages and relief as a court. The arbitrator has the right
          to impose sanctions in accordance with the AAA Rules and procedures
          for any frivolous claims, improper claims, or submissions the
          arbitrator determines have not been filed in good faith, as well as
          for a party's failure to comply with this Section or claims filed on
          behalf of a claimant who is not party to this agreement. No
          arbitration award or decision will have any preclusive effect as to
          issues or claims in any dispute with anyone who is not a named party
          to the arbitration. &nbsp;
        </p>
        <p>
          <strong>Mass filings.</strong> If, at any time, 30 or more similar
          demands for arbitration are asserted against Discord or related
          parties by the same or coordinated counsel or entities (“Mass
          Filing”), these additional rules will apply:
        </p>
        <p>
          If you or your counsel file a demand for arbitration that fits within
          the definition of Mass Filing, you agree that your demand for
          arbitration will be subject to the additional protocols set forth in
          this mass filing subsection.
        </p>
        <p>
          Bellwether proceedings are encouraged by courts and arbitration
          administrators when there are multiple disputes involving similar
          claims against the same or related parties. You and Discord agree to
          jointly ask the arbitrator to agree to the following procedures: The
          arbitrator will randomly assign sequential numbers to each of the
          claims included in a Mass Filing, after which the claims numbered 1-10
          will be designated the “Initial Test Cases” and will proceed to
          arbitration. The Parties agree to decide on a single arbitrator for
          all Initial Test Cases and to consolidate the cases for pre-hearing
          procedures and the pre-hearing conference. Unless the claims are
          resolved in advance or the schedule is extended, the arbitrator will
          render final awards for the Initial Test Cases within 120 days of the
          initial pre-hearing conference. If fewer than 5 Initial Test Cases
          resolve without a final decision of the arbitrator because they are
          resolved in advance, cases will be selected in batches of 10 and will
          proceed to arbitration until at least 5 have been resolved by a final
          arbitrator decision. The arbitrator’s decisions for the Initial Test
          Cases shall be in writing and shall contain the essential findings and
          conclusions of fact and law upon which the arbitrator based the
          decision.&nbsp;&nbsp;
        </p>
        <p>
          The results of the Initial Test Cases resolved by a final arbitrator
          decision will then be given to a mediator who will try to facilitate a
          resolution of the remaining cases. After the results are provided to
          the mediator, the mediator and the parties will have 90 days (the
          “Mediation Period”) to agree on a resolution or substantive
          methodology for resolving the outstanding cases. If the parties are
          unable to resolve the outstanding claims during the Mediation Period,
          either Party may choose to opt out of the arbitration process and
          proceed in court with its remaining claims. Notice of the opt-out will
          be provided in writing within 60 days of the close of the Mediation
          Period.&nbsp; Opt out of arbitration under this section shall not be
          construed as opt out of the section titled “Class Waiver” below.&nbsp;
        </p>
        <p>
          Absent notice of an opt-out, the arbitrations will proceed in the
          order determined by the sequential numbers assigned to claims in the
          Mass Filing.&nbsp;&nbsp;
        </p>
        <p>
          If your demand for arbitration is included in the Mass Filing, any
          statute of limitations applicable to your claims will remain tolled
          until your demand for arbitration is decided, withdrawn, or is
          settled.
        </p>
        <p>
          <strong>‍Other remedies.</strong> ARBITRATION MEANS THAT YOU WAIVE
          YOUR RIGHT TO A JURY TRIAL. In some instances, the costs of
          arbitration could exceed the costs of litigation and the right to
          discovery may be more limited in arbitration than in court. YOU HEREBY
          ACKNOWLEDGE AND AGREE THAT YOU AND DISCORD ARE EACH WAIVING THE RIGHT
          TO A TRIAL BY JURY TO THE MAXIMUM EXTENT PERMITTED BY LAW. You may, in
          arbitration, seek any and all remedies otherwise available to you
          pursuant to your state’s law.&nbsp;&nbsp;
        </p>
        <p>
          <strong>‍Opt-out.</strong> You can decline this agreement to arbitrate
          by emailing an opt-out notice to arbitration-opt-out@discord.com
          within 30 days of April 15, 2024 or when you first register your
          Discord account, whichever is later; otherwise, you shall be bound to
          arbitrate disputes in accordance with the terms of these paragraphs.
          If you opt out of these arbitration provisions, Discord also will not
          be bound by them.
        </p>
        <p>
          <strong>‍Exceptions.</strong> You or Discord may still pursue claims,
          if they qualify, exclusively in small claims court in San Francisco
          County, California, and you and Discord both consent to venue and
          personal jurisdiction in that court. The small claims court, and not
          any arbitrator or AAA, shall have the exclusive authority to resolve
          disputes regarding whether a dispute is properly within the
          jurisdiction of a small claims court. Additionally, disputes
          concerning patents, copyrights, moral rights, trademarks, and trade
          secrets and claims of piracy or unauthorized use of our services will
          not be subject to arbitration. Either party may also seek a
          declaratory judgment or other equitable relief in a court of competent
          jurisdiction regarding whether a party’s claims are time-barred or may
          be brought in small claims court. Seeking such relief shall not waive
          a party’s right to arbitration under this agreement, and any filed
          arbitrations related to any action filed pursuant to this paragraph
          shall automatically be stayed (and any applicable statute of
          limitations tolled) pending the outcome of such action.
        </p>
        <p>
          <strong>Class waiver.</strong> IF YOU’RE A U.S. RESIDENT, EXCEPT AS
          PROVIDED HEREIN, YOU AND DISCORD AGREE THAT EACH MAY BRING CLAIMS
          AGAINST THE OTHER ONLY IN OUR INDIVIDUAL CAPACITY, AND NOT AS A
          PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS OR REPRESENTATIVE
          PROCEEDING, UNLESS DISCORD PROVIDES ITS CONSENT TO CONSOLIDATE IN
          WRITING. If this specific paragraph is found unenforceable, then the
          “Agreement to arbitrate” section will be null and void. If there is a
          final judicial determination that applicable law precludes enforcement
          of this paragraph’s limitations as to a particular remedy, then that
          remedy (and only that remedy) must be severed from the arbitration and
          may be sought in court. The parties agree, however, that any
          adjudication of remedies not subject to arbitration shall be stayed
          pending the outcome of any arbitrable claims and remedies.&nbsp; This
          subsection does not prevent you or Discord from participating in a
          class-wide settlement of claims.
        </p>
        <p>
          <strong>Changes to this Dispute Section:</strong> Discord will provide
          30 days’ notice of the date of any material changes to this clause.
          Changes will become effective on the 30th day and apply to all claims
          not yet filed. If you continue to use the site after the 30th day, you
          agree that any unfiled claims of which Discord does not have actual
          notice are subject to the revised clause. If you reject any such
          changes by opting out of the arbitration agreement, you may exercise
          your right to a trial by jury or judge, as permitted by applicable
          law, but any prior existing agreement to arbitrate disputes under a
          prior version of the arbitration agreement will not apply to claims
          not yet filed. If Discord changes this “Dispute Resolution” section
          after the date you first accepted this agreement (or accepted any
          subsequent changes to this agreement), you agree that your continued
          use of the Discord product(s) or services 30 days after such change
          will be deemed acceptance of those changes. If you do not agree to
          such change, you may opt out by providing notice as described in this
          section.
        </p>
      </div>
      <div id="17" class="rich-guidlines-negative_new w-richtext">
        <h2>More important stuff</h2>
        <p>
          You have certain rights that, by law, can’t be limited by these terms,
          and we in no way intend to restrict those rights in these terms.
        </p>
        <p>
          <strong><em>Entire agreement.</em></strong> These terms cover the
          entire agreement between you and Discord for your use of our services.
        </p>
        <p>
          <strong><em>Additional terms.</em></strong> Where additional terms
          apply to our products or services, the additional terms will control
          with respect to your use of that product or service to the extent of
          any conflict with these terms.
        </p>
        <p>
          <strong><em>Bug reporting.</em></strong> We support the responsible
          reporting of security vulnerabilities. To report a security issue,
          please visit
          <a href="https://discord.com/security">https://discord.com/security</a
          >.
        </p>
        <p>
          <strong><em>Export Control.</em></strong> You agree to comply with all
          applicable import, export, and re-export control laws and
          restrictions, including but not limited to those of the European Union
          and its member states, the U.S. Department of Commerce Export
          Administration Regulations (“EAR”) and economic sanctions maintained
          by the U.S. Office of Foreign Assets Control (“OFAC”), and the
          International Traffic in Arms Regulations (“ITAR”), and will not use
          the services to cause a violation of such laws or regulations. You
          agree to not use our services to store or distribute content that is
          subject to export controls, unless you have obtained all required
          government export authorizations. Further, you represent and warrant
          that you are not on any government list of prohibited or restricted
          parties, or otherwise subject to equivalent restrictions, as specified
          in the laws and regulations listed above or in your country’s laws.
          You may not download or use our services if you are located in a
          country or region subject to U.S. or E.U. government embargo
          (including Cuba, Iran, North Korea, Syria, and the Crimea region)
          unless that use is authorized by the United States and other relevant
          authorities.
        </p>
        <p>
          <strong><em>Waiver, severability, and assignment.</em></strong> If you
          fail to follow these terms and we don’t immediately act, that doesn’t
          mean we’re giving up any of our legal rights (such as acting in the
          future). If any part of these terms ends up being invalid or
          unenforceable based on a decision by any court or competent authority,
          the rest of these terms will not be affected. You may not assign these
          terms to anyone else without our written consent. We may assign our
          rights to any of our affiliates or subsidiaries, or to any successor
          in interest of any business associated with our services.
        </p>
        <p>
          <strong><em>Survival.</em></strong> Any part of these terms that by
          their nature should survive after termination of these terms will
          survive. As permitted under applicable law, this includes but may not
          be limited to the following:
        </p>
        <ul role="list">
          <li>
            Our rights to
            <a
              href="https://support.discord.com/hc/en-us/articles/5431812448791-How-long-Discord-keeps-your-information"
              >retain and display certain data</a
            >;
          </li>
          <li>Any amounts owed will remain due;</li>
          <li>
            Any indemnification obligations (as applicable) such as those listed
            under the “Indemnity” section;
          </li>
          <li>
            Any disclaimer of warranties such as those under the “Services ‘AS
            IS’” section;
          </li>
          <li>
            Any applicable limitation of liability such as those under the
            “Limitation of Liability” section;
          </li>
          <li>
            Any dispute resolution provisions, including the arbitration
            agreement, such as those under the “Settling disputes between you
            and Discord” section.
          </li>
        </ul>
        <p>
          <strong><em>Updates to these terms.</em></strong> We may decide to
          update these terms: (1) to reflect changes to our services or our
          business, (2) for legal or regulatory reasons, (3) to prevent abuse on
          or of our services, or (4) to better protect or serve users of our
          services. If these changes materially affect your Discord use or your
          legal rights, we’ll give you reasonable advance notice (unless the
          updates are urgent). If you continue to use our services after the
          changes have taken effect, it means that you agree to the changes. If
          you don’t agree, you must stop using our services.
        </p>
        <p>
          <strong><em>Apple App Store.</em></strong> If you download the Discord
          app from the Apple App Store or use our app on an iOS device, the
          below paragraph applies to you.
        </p>
        <p>
          These terms grant a non-transferable license to use the Discord App on
          any Apple/Mac product that you might own or control and as permitted
          by Apple’s policies. Apple has no obligation to furnish any
          maintenance and support services with respect to the Discord app. If
          the app fails to conform to any applicable warranty, you may notify
          Apple and Apple will refund the app purchase price to you (if
          applicable) and, to the maximum extent permitted by applicable law,
          Apple will have no other warranty obligation whatsoever with respect
          to the Discord app. Apple is not responsible for addressing any claims
          by you or any third party relating to the Discord app or your
          possession and use of it, including, but not limited to: (i) product
          liability claims; (ii) any claim that the Discord app fails to conform
          to any applicable legal or regulatory requirement; and (iii) claims
          arising under consumer protection or similar legislation. Apple is not
          responsible for the investigation, defense, settlement and discharge
          of any third-party claim that your possession and use of the Discord
          app infringe that third party’s intellectual property rights. Apple
          and its subsidiaries are third-party beneficiaries of these terms, and
          upon acceptance of the terms, Apple will have the right (and will be
          deemed to have accepted the right) to enforce these terms against you
          as a third-party beneficiary thereof. You represent and warrant that
          (i) you are not located in a country that is subject to a U.S.
          Government embargo, or that has been designated by the U.S. Government
          as a terrorist-supporting country; and (ii) you are not listed on any
          U.S. Government list of prohibited or restricted parties. You must
          also comply with any applicable third-party terms of service when
          using the Discord app.
        </p>
        <h2>Contacting each other</h2>
        <p>
          If you have any questions about these terms, please contact us at
          <a href="mailto:privacy@discord.com">privacy@discord.com</a>. We may
          send you electronic communications related to our services. Where
          required, we’ll get your consent before sending you direct marketing,
          and we’ll make it easy for you to opt out.
        </p>
      </div>
    </div>
  </div>
  <div class="footer_new">
    <div class="footer-styles w-embed">
      <style>
        @-moz-document url-prefix() {
          .dropdown-language-list-wr .dropdown-list-container-wr {
            scrollbar-width: thin;
            scrollbar-color: white transparent;
          }
        }
        .dropdown-language-list-wr .dropdown-list-container-wr {
          max-height: 240px !important;
          overflow: auto !important;
        }
        .dropdown-language-list-wr
          .dropdown-list-container-wr::-webkit-scrollbar {
          width: 6px;
        }
        .dropdown-language-list-wr
          .dropdown-list-container-wr::-webkit-scrollbar-thumb {
          background-color: white;
          border-radius: 3px;
          margin-right: 30px;
        }
        .dropdown-language-list-wr
          .dropdown-list-container-wr::-webkit-scrollbar-button {
          display: none;
        }
      </style>
    </div>
    <div class="container-1762">
      <div class="w-layout-grid grid-footer is-new-com">
        <div
          id="w-node-_93d0322f-4184-d118-cde0-447042a4716e-42a4716b"
          class="vertical-flex mobile-left is_new"
        >
          <a href="/" class="footer-logo-link w-inline-block"
            ><img
              src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/66e278299a53f5bf88615e90_Symbol.svg"
              loading="lazy"
              alt="Home page"
          /></a>
          <div class="p-footer">Language</div>
          <div class="padding-16px"></div>
          <div
            data-hover="false"
            data-delay="0"
            data-w-id="93d0322f-4184-d118-cde0-447042a47174"
            class="dropdown-language-wr w-dropdown"
          >
            <div class="dropdown-language-btn w-dropdown-toggle">
              <div class="dropdown-language-name">English (US)</div>
              <img
                src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/66e2c5a476e29535c2465b24_Chevron%20Down.svg"
                loading="lazy"
                alt=""
                class="dropdown-language-arrow"
              />
            </div>
            <nav class="dropdown-language-list-wr w-dropdown-list">
              <ul role="list" class="dropdown-list-container-wr">
                <li
                  tabindex="0"
                  data-locale="cs"
                  class="dropdown-list-container"
                >
                  <div class="dropdown-language-item">Čeština</div>
                </li>
                <li
                  tabindex="0"
                  data-locale="da"
                  class="dropdown-list-container"
                >
                  <div class="dropdown-language-item">Dansk</div>
                </li>
                <li
                  tabindex="0"
                  data-locale="de"
                  class="dropdown-list-container"
                >
                  <div class="dropdown-language-item">Deutsch</div>
                </li>
                <li
                  tabindex="0"
                  data-locale="en"
                  class="dropdown-list-container"
                >
                  <div class="dropdown-language-item">English</div>
                </li>
                <li
                  tabindex="0"
                  data-locale="en-GB"
                  class="dropdown-list-container"
                >
                  <div class="dropdown-language-item">English (UK)</div>
                </li>
                <li
                  tabindex="0"
                  data-locale="es"
                  class="dropdown-list-container"
                >
                  <div class="dropdown-language-item">Español</div>
                </li>
                <li
                  tabindex="0"
                  data-locale="es-LA"
                  class="dropdown-list-container"
                >
                  <div class="dropdown-language-item">
                    Español (América Latina)
                  </div>
                </li>
                <li
                  tabindex="0"
                  data-locale="fr"
                  class="dropdown-list-container"
                >
                  <div class="dropdown-language-item">Français</div>
                </li>
                <li
                  tabindex="0"
                  data-locale="hr"
                  class="dropdown-list-container"
                >
                  <div class="dropdown-language-item">Hrvatski</div>
                </li>
                <li
                  tabindex="0"
                  data-locale="it"
                  class="dropdown-list-container"
                >
                  <div class="dropdown-language-item">Italiano</div>
                </li>
                <li
                  tabindex="0"
                  data-locale="lt"
                  class="dropdown-list-container"
                >
                  <div class="dropdown-language-item">lietuvių kalba</div>
                </li>
                <li
                  tabindex="0"
                  data-locale="hu"
                  class="dropdown-list-container"
                >
                  <div class="dropdown-language-item">Magyar</div>
                </li>
                <li
                  tabindex="0"
                  data-locale="nl"
                  class="dropdown-list-container"
                >
                  <div class="dropdown-language-item">Nederlands</div>
                </li>
                <li
                  tabindex="0"
                  data-locale="no"
                  class="dropdown-list-container"
                >
                  <div class="dropdown-language-item">Norsk</div>
                </li>
                <li
                  tabindex="0"
                  data-locale="pl"
                  class="dropdown-list-container"
                >
                  <div class="dropdown-language-item">Polski</div>
                </li>
                <li
                  tabindex="0"
                  data-locale="pt-BR"
                  class="dropdown-list-container"
                >
                  <div class="dropdown-language-item">Português (Brasil)</div>
                </li>
                <li
                  tabindex="0"
                  data-locale="ro"
                  class="dropdown-list-container"
                >
                  <div class="dropdown-language-item">Română</div>
                </li>
                <li
                  tabindex="tabindex"
                  data-locale="fi"
                  class="dropdown-list-container"
                >
                  <div class="dropdown-language-item">Suomi</div>
                </li>
                <li
                  tabindex="0"
                  data-locale="sv"
                  class="dropdown-list-container"
                >
                  <div class="dropdown-language-item">Svenska</div>
                </li>
                <li
                  tabindex="0"
                  data-locale="vi"
                  class="dropdown-list-container"
                >
                  <div class="dropdown-language-item">Tiếng Việt</div>
                </li>
                <li
                  tabindex="0"
                  data-locale="tr"
                  class="dropdown-list-container"
                >
                  <div class="dropdown-language-item">Türkçe</div>
                </li>
                <li
                  tabindex="0"
                  data-locale="el"
                  class="dropdown-list-container"
                >
                  <div class="dropdown-language-item">Ελληνικά</div>
                </li>
                <li
                  tabindex="0"
                  data-locale="bg"
                  class="dropdown-list-container"
                >
                  <div class="dropdown-language-item">български</div>
                </li>
                <li
                  tabindex="0"
                  data-locale="ru"
                  class="dropdown-list-container"
                >
                  <div class="dropdown-language-item">Русский</div>
                </li>
                <li
                  tabindex="0"
                  data-locale="uk"
                  class="dropdown-list-container"
                >
                  <div class="dropdown-language-item">Українська</div>
                </li>
                <li
                  tabindex="0"
                  data-locale="hi"
                  class="dropdown-list-container"
                >
                  <div class="dropdown-language-item">हिंदी</div>
                </li>
                <li
                  tabindex="0"
                  data-locale="th"
                  class="dropdown-list-container"
                >
                  <div class="dropdown-language-item">ไทย</div>
                </li>
                <li
                  tabindex="0"
                  data-locale="ko"
                  class="dropdown-list-container"
                >
                  <div class="dropdown-language-item">한국어</div>
                </li>
                <li
                  tabindex="0"
                  data-locale="zh-Hans"
                  class="dropdown-list-container"
                >
                  <div class="dropdown-language-item">中文</div>
                </li>
                <li
                  tabindex="0"
                  data-locale="zh-TW"
                  class="dropdown-list-container"
                >
                  <div class="dropdown-language-item">中文(繁體)</div>
                </li>
                <li
                  tabindex="0"
                  data-locale="ja"
                  class="dropdown-list-container"
                >
                  <div class="dropdown-language-item">日本語</div>
                </li>
              </ul>
            </nav>
          </div>
          <div class="desctop-soc">
            <div class="p-footer hide-landscape">Social</div>
            <div class="flex-horizontal top-soc-new">
              <a
                data-track="twitter"
                href="https://twitter.com/discord"
                target="_blank"
                class="link-s w-inline-block"
                ><img
                  src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/65a4fe4237b6a1c4fa714f76_x.svg"
                  loading="lazy"
                  alt="Twitter"
                  class="image" /></a
              ><a
                data-track="instagram"
                href="https://www.instagram.com/discord/"
                target="_blank"
                class="link-s w-inline-block"
                ><img
                  src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/65a4fe42d907d27f3dead7a0_instagram.svg"
                  loading="lazy"
                  alt="Instagram"
                  class="image" /></a
              ><a
                data-track="facebook"
                href="https://www.facebook.com/discord/"
                target="_blank"
                class="link-s w-inline-block"
                ><img
                  src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/65a4fe4173c1df8be608c8a2_facebook.svg"
                  loading="lazy"
                  alt="Facebook"
                  class="image" /></a
              ><a
                data-track="youtube"
                href="https://www.youtube.com/discord"
                target="_blank"
                class="link-s w-inline-block"
                ><img
                  src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/65a4fe42d907d27f3dead7ad_youtube.svg"
                  loading="lazy"
                  alt="Youtube"
                  class="image" /></a
              ><a
                data-track="Tiktok"
                href="https://www.tiktok.com/@discord"
                target="_blank"
                class="link-s w-inline-block"
                ><img
                  src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/65a4fe4152ae5860036dadf1_tiktok.svg"
                  loading="lazy"
                  alt="Tiktok"
                  class="image"
              /></a>
            </div>
          </div>
        </div>
        <div id="w-node-_93d0322f-4184-d118-cde0-447042a471e6-42a4716b">
          <div class="footer-h-link show-landscape">Menu</div>
          <div
            data-hover="false"
            data-delay="0"
            data-w-id="93d0322f-4184-d118-cde0-447042a471e9"
            class="dropdown-footer w-dropdown"
          >
            <div class="dropdown-toggle-footer w-dropdown-toggle">
              <div>Product</div>
              <img
                src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/66e15958db56b5a91218f5e9_Chevron%20Down.svg"
                loading="lazy"
                alt=""
                class="arrow-drop show-landscape"
              />
            </div>
            <nav class="dropdown-list-footer w-dropdown-list">
              <div class="padding-16px show-landscape"></div>
              <a
                data-track="download"
                href="/download"
                class="link-footer top-new-link"
                >Download</a
              ><a
                data-track="nitro"
                href="/nitro"
                class="link-footer top-new-link"
                >Nitro</a
              ><a
                data-track="status"
                href="https://discordstatus.com/"
                class="link-footer top-new-link"
                >Status</a
              ><a
                data-track="app directory"
                href="/application-directory"
                class="link-footer top-new-link"
                >App Directory</a
              >
            </nav>
          </div>
        </div>
        <div id="w-node-_93d0322f-4184-d118-cde0-447042a471fa-42a4716b">
          <div
            data-hover="false"
            data-delay="0"
            data-w-id="93d0322f-4184-d118-cde0-447042a471fb"
            class="dropdown-footer w-dropdown"
          >
            <div class="dropdown-toggle-footer w-dropdown-toggle">
              <div>Company</div>
              <img
                src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/66e15958db56b5a91218f5e9_Chevron%20Down.svg"
                loading="lazy"
                alt=""
                class="arrow-drop show-landscape"
              />
            </div>
            <nav class="dropdown-list-footer w-dropdown-list">
              <div class="padding-16px show-landscape"></div>
              <a
                data-track="about"
                href="/company"
                class="link-footer top-new-link"
                >About</a
              ><a
                data-track="jobs"
                href="/careers"
                class="link-footer top-new-link"
                >Jobs</a
              ><a
                data-track="branding"
                href="/branding"
                class="link-footer top-new-link"
                >Brand</a
              ><a
                data-track="newsroom"
                href="/newsroom"
                class="link-footer top-new-link"
                >Newsroom</a
              >
            </nav>
          </div>
        </div>
        <div id="w-node-_93d0322f-4184-d118-cde0-447042a4720a-42a4716b">
          <div
            data-hover="false"
            data-delay="0"
            data-w-id="93d0322f-4184-d118-cde0-447042a4720b"
            class="dropdown-footer w-dropdown"
          >
            <div class="dropdown-toggle-footer w-dropdown-toggle">
              <div>Resources</div>
              <img
                src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/66e15958db56b5a91218f5e9_Chevron%20Down.svg"
                loading="lazy"
                alt=""
                class="arrow-drop show-landscape"
              />
            </div>
            <nav class="dropdown-list-footer w-dropdown-list">
              <div class="padding-16px show-landscape"></div>
              <a
                data-track="college"
                href="/college"
                class="link-footer top-new-link"
                >College</a
              ><a
                data-track="support"
                href="https://support.discord.com/hc"
                class="link-footer top-new-link"
                >Support</a
              ><a
                data-track="safety"
                href="/safety"
                class="link-footer top-new-link"
                >Safety</a
              ><a
                data-track="blog"
                href="/blog"
                class="link-footer top-new-link"
                >Blog</a
              ><a
                data-track="streamkit"
                href="/streamkit"
                class="link-footer top-new-link"
                >StreamKit</a
              ><a
                data-track="creators"
                href="/creators"
                class="link-footer top-new-link"
                >Creators</a
              ><a
                data-track="community"
                href="/community"
                class="link-footer top-new-link"
                >Community</a
              ><a
                data-track="Build"
                href="/developers"
                class="link-footer top-new-link"
                >Developers</a
              ><a
                data-track="Build"
                href="/ads/quests"
                class="link-footer top-new-link"
                >Quests</a
              ><a
                data-track="store"
                href="https://discordmerch.com/evergreenfooter"
                target="_blank"
                class="link-footer top-new-link"
                >Official 3rd Party Merch</a
              ><a
                data-track="feedback"
                href="https://support.discord.com/hc/en-us/community/topics"
                class="link-footer top-new-link"
                >Feedback</a
              >
            </nav>
          </div>
        </div>
        <div id="w-node-_93d0322f-4184-d118-cde0-447042a4722a-42a4716b">
          <div
            data-hover="false"
            data-delay="0"
            data-w-id="93d0322f-4184-d118-cde0-447042a4722b"
            class="dropdown-footer line-none w-dropdown"
          >
            <div class="dropdown-toggle-footer w-dropdown-toggle">
              <div>Policies</div>
              <img
                src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/66e15958db56b5a91218f5e9_Chevron%20Down.svg"
                loading="lazy"
                alt=""
                class="arrow-drop show-landscape"
              />
            </div>
            <nav class="dropdown-list-footer w-dropdown-list">
              <div class="padding-16px show-landscape"></div>
              <a
                data-track="terms"
                href="/terms"
                class="link-footer top-new-link"
                >Terms</a
              ><a
                data-track="privacy"
                href="/privacy"
                class="link-footer top-new-link"
                >Privacy</a
              ><a
                data-open-cookie-settings="true"
                href="#"
                class="link-footer top-new-link"
                >Cookie Settings</a
              ><a
                data-track="guidelines"
                href="/guidelines"
                class="link-footer top-new-link"
                >Guidelines</a
              ><a
                data-track="acknowledgement"
                href="/acknowledgements"
                class="link-footer top-new-link"
                >Acknowledgements</a
              ><a
                data-track="licenses"
                href="/licenses"
                class="link-footer top-new-link"
                >Licenses</a
              ><a
                data-track="moderation"
                href="/company-information"
                class="link-footer top-new-link"
                >Company Information</a
              >
            </nav>
          </div>
        </div>
        <div
          id="w-node-_93d0322f-4184-d118-cde0-447042a47240-42a4716b"
          class="show-soc"
        >
          <div class="p-footer">Social</div>
          <div class="flex-horizontal top-soc-new">
            <a
              data-track="twitter"
              href="https://x.com/discord"
              target="_blank"
              class="link-s w-inline-block"
              ><img
                src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/65a4fe4237b6a1c4fa714f76_x.svg"
                loading="lazy"
                alt="Twitter"
                class="image" /></a
            ><a
              data-track="instagram"
              href="https://www.instagram.com/discord/"
              target="_blank"
              class="link-s w-inline-block"
              ><img
                src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/65a4fe42d907d27f3dead7a0_instagram.svg"
                loading="lazy"
                alt="Instagram"
                class="image" /></a
            ><a
              data-track="facebook"
              href="https://www.facebook.com/discord/"
              target="_blank"
              class="link-s w-inline-block"
              ><img
                src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/65a4fe4173c1df8be608c8a2_facebook.svg"
                loading="lazy"
                alt="Facebook"
                class="image" /></a
            ><a
              data-track="youtube"
              href="https://www.youtube.com/discord"
              target="_blank"
              class="link-s w-inline-block"
              ><img
                src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/65a4fe42d907d27f3dead7ad_youtube.svg"
                loading="lazy"
                alt="Youtube"
                class="image" /></a
            ><a
              data-track="Tiktok"
              href="https://www.tiktok.com/@discord"
              target="_blank"
              class="link-s w-inline-block"
              ><img
                src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/65a4fe4152ae5860036dadf1_tiktok.svg"
                loading="lazy"
                alt="Tiktok"
                class="image"
            /></a>
          </div>
        </div>
      </div>
    </div>
    <div class="container_word">
      <img
        src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/67ac9b4644222140ae614b06_Wordmark.svg"
        loading="lazy"
        aria-label="Discord"
        alt="Discord"
        class="word"
      />
    </div>
  </div>
</body>
