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
                    <div class="nav_dd_content_layout top-none">
                      <div class="nav_dd_link-group">
                        <div class="nav_dd_link_list is-new">
                          <div class="nav_dd_link_title">Resources</div>
                          <a href="/safety-news" class="dd_nav-link"
                            >Safety News</a
                          ><a href="/safety-library" class="dd_nav-link"
                            >Safety Library</a
                          >
                        </div>
                      </div>
                      <div class="nav_dd_link-group is_2025">
                        <a
                          href="/guidelines"
                          class="nav_dd_link-group_title is-new-white"
                          >Community Guidelines</a
                        >
                        <div class="nav_dd_link_list">
                          <div class="nav_dd_link_title">Resources</div>
                          <a
                            href="/safety-privacy"
                            class="dd_nav-link w-inline-block"
                            ><div>Privacy Hub</div></a
                          ><a
                            href="/safety-policies"
                            class="dd_nav-link w-inline-block"
                            ><div>Policy Hub</div></a
                          ><a
                            href="/safety-transparency"
                            class="dd_nav-link w-inline-block"
                            ><div>Transparency Hub</div></a
                          >
                        </div>
                        <div class="nav_dd_link_line is-n"></div>
                        <div class="nav_dd_link_list">
                          <div class="nav_dd_link_title">Documentation</div>
                          <a
                            href="https://discord.com/safety-transparency-reports/2024-h1"
                            class="dd_nav-link w-inline-block"
                            ><div>Transparency Reports</div></a
                          >
                        </div>
                      </div>
                      <div class="nav_dd_link-group">
                        <a
                          href="/safety-family-center"
                          class="nav_dd_link-group_title is-new-white"
                          >Family Center</a
                        >
                        <div class="nav_dd_link_list">
                          <div class="nav_dd_link_title">Resources</div>
                          <a
                            href="/safety-parents"
                            class="dd_nav-link w-inline-block"
                            ><div>Parent Hub</div></a
                          ><a
                            href="/safety-teen-charter"
                            class="dd_nav-link w-inline-block"
                            ><div>Teen Charter</div></a
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
                              href="https://discord.com/safety"
                              class="nav_dd_link-group_title is-new"
                              >Safety</a
                            >
                            <div class="nav_dd_link_list">
                              <div class="nav_dd_link_title is-new">
                                Resources
                              </div>
                              <a
                                href="https://discord.com/safety-news"
                                class="dd_nav-link is-new"
                                >Safety News</a
                              ><a
                                href="https://discord.com/safety-library"
                                class="dd_nav-link is-new"
                                >Safety Library</a
                              >
                            </div>
                          </div>
                          <div class="nav_dd_link-group">
                            <a
                              href="https://discord.com/guidelines"
                              class="nav_dd_link-group_title is-new"
                              >Community Guidelines</a
                            >
                            <div class="nav_dd_link_list">
                              <div class="nav_dd_link_title is-new">
                                Resources
                              </div>
                              <a
                                href="https://discord.com/safety-privacy"
                                class="dd_nav-link is-new w-inline-block"
                                ><div>Privacy Hub</div></a
                              ><a
                                href="https://discord.com/safety-policies"
                                class="dd_nav-link is-new w-inline-block"
                                ><div>Policy Hub</div></a
                              ><a
                                href="https://discord.com/safety-transparency"
                                class="dd_nav-link is-new w-inline-block"
                                ><div>Transparency Hub</div></a
                              >
                            </div>
                            <div class="nav_dd_link_line"></div>
                            <div class="nav_dd_link_list">
                              <div class="nav_dd_link_title is-new">
                                Documentation
                              </div>
                              <a
                                href="https://discord.com/safety-transparency-reports/2024-h1"
                                class="dd_nav-link is-new w-inline-block"
                                ><div>Transparency Reports</div></a
                              >
                            </div>
                          </div>
                          <div class="nav_dd_link-group">
                            <a
                              href="https://discord.com/safety-family-center"
                              class="nav_dd_link-group_title is-new"
                              >Family Center</a
                            >
                            <div class="nav_dd_link_list">
                              <div class="nav_dd_link_title is-new">
                                Resources
                              </div>
                              <a
                                href="https://discord.com/safety-parents"
                                class="dd_nav-link is-new w-inline-block"
                                ><div>Parent Hub</div></a
                              ><a
                                href="https://discord.com/safety-teen-charter"
                                class="dd_nav-link is-new w-inline-block"
                                ><div>Teen Charter</div></a
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
        <h1 class="new-h1 is_new">Discord Privacy Policy</h1>
      </div>
      <div class="rich-terms_new w-richtext">
        <h4>Effective: April 15, 2024</h4>
        <h4>Last Updated: March 15, 2024</h4>
      </div>
      <a href="#" class="link-terms is_new w-inline-block"
        ><div class="menu-numbers">1.</div>
        <div>Welcome!</div></a
      ><a href="#2" class="link-terms is_new w-inline-block"
        ><div class="menu-numbers">2.</div>
        <div>
          Discord is the best place to talk, hang out and have fun with friends
          online
        </div></a
      ><a href="#3" class="link-terms is_new w-inline-block"
        ><div class="menu-numbers">3.</div>
        <div>The information we collect</div></a
      ><a href="#3" class="link-terms _30px is_new w-inline-block"
        ><div class="menu-numbers bl">•</div>
        <div>Information you provide to us</div></a
      ><a href="#3" class="link-terms _30px is_new w-inline-block"
        ><div class="menu-numbers bl">•</div>
        <div>Information we collect automatically</div></a
      ><a href="#3" class="link-terms _30px is_new w-inline-block"
        ><div class="menu-numbers bl">•</div>
        <div>Information we receive from other sources</div></a
      ><a href="#4" class="link-terms is_new w-inline-block"
        ><div class="menu-numbers">4.</div>
        <div>How we use your information</div></a
      ><a href="#5" class="link-terms is_new w-inline-block"
        ><div class="menu-numbers">5.</div>
        <div>How we disclose your information</div></a
      ><a
        href="#5"
        class="link-terms _30px w-inline-block w-condition-invisible"
        ><div class="menu-numbers bl">•</div>
        <div class="w-dyn-bind-empty"></div></a
      ><a
        href="#5"
        class="link-terms _30px w-inline-block w-condition-invisible"
        ><div class="menu-numbers bl">•</div>
        <div class="w-dyn-bind-empty"></div></a
      ><a
        href="#5"
        class="link-terms _30px w-inline-block w-condition-invisible"
        ><div class="menu-numbers bl">•</div>
        <div class="w-dyn-bind-empty"></div></a
      ><a href="#6" class="link-terms is_new w-inline-block"
        ><div class="menu-numbers">6.</div>
        <div>Data retention</div></a
      ><a href="#7" class="link-terms is_new w-inline-block"
        ><div class="menu-numbers">7.</div>
        <div>How we protect your information</div></a
      ><a href="#8" class="link-terms is_new w-inline-block"
        ><div class="menu-numbers">8.</div>
        <div>How to control your privacy</div></a
      ><a href="#9" class="link-terms is_new w-inline-block"
        ><div class="menu-numbers">9.</div>
        <div>International data transfers</div></a
      ><a href="#10" class="link-terms is_new w-inline-block"
        ><div class="menu-numbers">10.</div>
        <div>Services offered by third parties</div></a
      ><a href="#11" class="link-terms is_new w-inline-block"
        ><div class="menu-numbers">11.</div>
        <div>Data Protection Officer</div></a
      ><a href="#12" class="link-terms is_new w-inline-block"
        ><div class="menu-numbers">12.</div>
        <div>Information about local privacy laws</div></a
      ><a href="#13" class="link-terms is_new w-inline-block"
        ><div class="menu-numbers">13.</div>
        <div>Changes to this Privacy Policy</div></a
      ><a href="#14" class="link-terms is_new w-inline-block"
        ><div class="menu-numbers">14.</div>
        <div>Contact us</div></a
      ><a
        href="#15"
        class="link-terms is_new w-inline-block w-condition-invisible"
        ><div class="menu-numbers">15.</div>
        <div class="w-dyn-bind-empty"></div></a
      ><a
        href="#16"
        class="link-terms is_new w-inline-block w-condition-invisible"
        ><div class="menu-numbers">16.</div>
        <div class="w-dyn-bind-empty"></div></a
      ><a
        href="#17"
        class="link-terms is_new w-inline-block w-condition-invisible"
        ><div class="menu-numbers">17.</div>
        <div class="w-dyn-bind-empty"></div
      ></a>
      <div
        class="rich-guidlines-negative_new w-dyn-bind-empty w-richtext"
      ></div>
      <div id="1" class="rich-guidlines-negative_new w-richtext">
        <h2>Welcome!</h2>
        <p>
          This Privacy Policy explains how we collect, use, store, protect, and
          share your personal information through our services. If you reside in
          the European Economic Area (“EEA”) or United Kingdom, Discord
          Netherlands BV is the “data controller” of your personal information
          collected through the services (as defined in our
          <a href="https://discord.com/terms">Terms of Service</a>). For
          everyone else, Discord Inc. is the data controller. It’s important
          that you read this entire policy, but here’s a summary to get you
          started:
        </p>
        <ul role="list">
          <li>
            <strong>We care a lot about privacy</strong>. We are committed to
            creating spaces where people can talk, hang out and have fun with
            friends online. Respecting user privacy is a key part of
            <a href="https://discord.com/safety-privacy">that mission</a>.
          </li>
          <li>
            <strong>We don’t sell your personal information</strong>. Our
            business is based on subscriptions and paid products, not from
            selling your personal information to third parties.
          </li>
          <li>
            <strong>We limit what information is required</strong>. We require
            the information that enables us to create your account, provide and
            maintain our services, meet our commitments to our users, and
            satisfy our legal requirements. The rest is optional.
          </li>
          <li>
            <strong>We care deeply about safety</strong>. Our dedicated Trust
            and Safety team works hard to help keep our community safe. We also
            use certain information to help us identify violations of our
            Community Guidelines and prevent harmful content from being
            distributed through the services.&nbsp;
          </li>
          <li>
            <strong>We give you control</strong>. We give you the ability to
            control your privacy on Discord.
          </li>
        </ul>
      </div>
      <div id="2" class="rich-guidlines-negative_new w-richtext">
        <h2>
          Discord is the best place to talk, hang out and have fun with friends
          online
        </h2>
        <p>
          We created Discord to be the best place to talk, hang out and have fun
          with friends online. Whether you’re part of a club, gaming group, or
          just a handful of friends that want to spend time together, Discord
          makes it easy to connect with friends.
        </p>
        <p>
          Our “services” has the same meaning as defined in the
          <a href="https://discord.com/terms">Terms of Service</a>. They include
          the Discord app, which can be accessed on mobile, web, desktop,
          console, or even a connected home appliance—any device with a web
          browser and internet connection. We also have a website, blog, and
          support center, and we may collect your information through other
          means like surveys, emails, and social media. If we build another
          product, our services include that too.
        </p>
        <p>
          As explained in our
          <a href="https://discord.com/terms">Terms of Service</a>, we allow
          users to add content to the services in a number of different ways,
          including via direct messages and in smaller and larger spaces. If you
          share content within larger spaces, that content may be accessed by
          many people, including people you do not know. For example, some
          servers are available in the Server Discovery section of the app and
          do not require an invite link to join. Other server owners may publish
          their server invite link on public websites. Anyone can access these
          servers, and you should be aware that server owners or admins set
          these permissions, and like the size of a server, the permissions may
          change over time.
        </p>
        <p>
          We may also use content posted in larger spaces to help us develop,
          improve and power our services, including features that help you catch
          up on conversations and safety features that identify harmful content
          on the services and support the enforcement of our
          <a href="https://discord.com/terms">Terms of Service</a> and
          <a href="https://discord.com/guidelines">Community Guidelines</a>.
          These things are important to us, and we believe they will make
          Discord even better for our users. We will always try to let you know
          the type of space you are in (although we don’t control where invite
          links are shared or the permissions for that server). You can limit
          the extent to which your content is used for these purposes as
          described in the “How to control your privacy” section below. You can
          learn more about our approach to safety and content moderation,
          including how we use your information for these purposes, in our
          <a
            href="https://discord.com/safety/our-approach-to-content-moderation"
            >Safety Center</a
          >. You should take all of this into account when you are using our
          services, and choose the spaces, features, and settings that are most
          appropriate for your content.
        </p>
        <p>
          We make money from paid subscriptions and the sale of digital (and
          sometimes physical) goods, not from selling your personal information
          to third parties.
        </p>
      </div>
      <div id="3" class="rich-guidlines-negative_new w-richtext">
        <h2>The information we collect</h2>
        <p>
          We collect certain information when you use Discord. This includes
          information you provide to us, information we collect automatically,
          and information we receive from other sources.
        </p>
        <h4>Information you provide to us</h4>
        <ul role="list">
          <li>
            <strong>Account information</strong>. When you create a Discord
            account, you can come up with a username and password, and provide a
            way of contacting you (such as an email address and/or phone
            number). You’ll also need to provide your birthday. In some cases,
            we may require additional information to verify your age. You may be
            required to verify your account or provide additional information
            (like a verified phone number) to your account. You may also have
            the option to add your name or choose a display name.
          </li>
          <li>
            <strong>Content you create</strong>. This includes any content that
            you upload to the service. For example, you may write messages or
            posts (including drafts), send voice messages, create custom emojis,
            or post other content that you create with features that we develop.
            You may also upload and share files through the services. This also
            includes your profile information and the information you provide
            when you create servers.&nbsp;We generally do not store the contents
            of video or voice calls or channels. If we were to change that in
            the future (for example, to facilitate content moderation), we would
            disclose that to you in advance. We also don’t store streaming
            content when you share your screen, but we do retain the thumbnail
            cover image for the stream for a short period of time. We may build
            features that help users engage with voice and video content, like
            create or send short recordings.
          </li>
          <li>
            <strong>Payment information</strong>. If you buy any paid services
            through Discord, you may need to submit a valid payment method and
            associated billing information, including your full name and billing
            address. Our payment processors, like Stripe and PayPal, receive and
            process your payment information. Depending on the processor, we may
            also receive and store certain billing information, including the
            last four digits of the credit card number associated with the
            transaction. If you sell something through Discord, you may be
            required to provide additional information to Discord or to our
            payment processors, such as bank account information to facilitate
            payments, tax identification information, and copies of government
            issued identification required to identify users in accordance with
            regulatory obligations. If we decide to process our own payments in
            the future, we would receive and process this information ourselves.
          </li>
          <li>
            <strong>Information from actions you take</strong>. We collect
            information about your use of Discord and your activities on the
            services. This includes information such as the friends you add, the
            users, bots, and apps you engage with, the games you play on your
            device, the servers or other communities you join and participate
            in, your roles in servers, content moderation decisions you make,
            information about purchases or sales you make on or through Discord
            including what you purchased or sold, and other related actions. You
            can control the extent to which we collect, use, and display this
            information as described in the “<a
              href="https://support.discord.com/hc/en-us/articles/360004109911-Data-Privacy-Controls"
              >How to control your privacy</a
            >” section below.
          </li>
          <li>
            <strong>Information from optional features</strong>. Certain
            features, like contact syncing, may require that you provide
            additional information (or grant us access to such information) to
            make them work. This also includes third-party integrations you
            choose to enable and the data you authorize those third-party
            services to share with us. For example, when you link a music
            streaming account, we may collect information about that account
            such as the song you are listening to in order to display that
            information on your profile or as your status (if you have chosen to
            do so).
          </li>
          <li>
            <strong>Other information you provide directly to us</strong>. You
            may have the option to submit additional information as you use
            Discord. For example, you may participate in surveys where you can
            provide feedback on the services, or submit information to our
            Discord Support teams.
          </li>
        </ul>
        <h4>Information we collect automatically</h4>
        <p>
          We also collect information automatically from you when you use
          Discord. This includes:
        </p>
        <ul role="list">
          <li>
            <strong>Information about your device</strong>. We collect
            information about the device you are using to access the services.
            For example, this includes information like your IP address,
            operating system information, browser information, and information
            about your device settings, such as your microphone and/or
            camera.&nbsp;
          </li>
          <li>
            <strong>Information about your use of the apps or websites</strong>.
            For example, we collect log and event information related to how and
            when you use our services (such as the pages, servers, and channels
            you visit, the activities you engage in, the features you use, and
            the surfaces or embedded content you interact with).
          </li>
          <li>
            <strong>Other information that we collect automatically</strong>.
            When you take certain actions on other sites, we may receive
            information about you. For example, when we advertise for Discord on
            third party platforms, if you click on the ad, we may receive
            information about which ad you saw and on which platform. Similarly,
            we may also receive certain information when you click on a referral
            link, such as which website you came from.
          </li>
        </ul>
        <p>
          We may receive information from cookies (small text files placed on
          your computer or device) and similar technologies. You can find out
          more about Discord’s cookie usage and how you can manage your cookie
          permissions in our
          <a href="https://discord.com/terms/cookie-policy">Cookie Policy</a>.
        </p>
        <h4>Information we receive from other sources</h4>
        <p>
          We may receive information about you from other sources, including
          from other users and third parties, and combine that information with
          the other information we have about you. For example, if you interact
          with our social media account on another platform, we may receive
          certain information about you like your username on that platform.
        </p>
      </div>
      <div id="4" class="rich-guidlines-negative_new w-richtext">
        <h2>How we use your information</h2>
        <p>
          Under certain data protection laws like GDPR, companies must have a
          “legal basis”—a valid reason—to process personal information. Discord
          relies on different legal bases to process your information for the
          purposes described in this Privacy Policy. We use the Information We
          Collect—<a
            href="https://discord.com/privacy#:~:text=Account%20information."
            >Account information</a
          >,
          <a
            href="https://discord.com/privacy#:~:text=a%20display%20name.-,Content%20you%20create.,-This%20includes%20any"
            >Content you create</a
          >,
          <a
            href="https://discord.com/privacy#:~:text=you%20create%20servers.-,Payment%20information.,-If%20you%20buy"
            >Payment information</a
          >,
          <a
            href="https://discord.com/privacy#:~:text=Information%20from%20actions%20you%20take."
            >Information from actions you take</a
          >,
          <a
            href="https://discord.com/privacy#:~:text=Information%20used%20to%20enable%20optional%20features."
            >Information used to enable optional features</a
          >,
          <a
            href="https://discord.com/privacy#:~:text=Other%20information%20you%20provide%20directly%20to%20us."
            >Other information you provide directly to us</a
          >,
          <a
            href="https://discord.com/privacy#:~:text=Information%20about%20your%20device."
            >Information about your device</a
          >,
          <a
            href="https://discord.com/privacy#:~:text=Information%20about%20your%20use%20of%20the%20apps%20or%20websites."
            >Information about your use of the apps or websites</a
          >,
          <a
            href="https://discord.com/privacy#:~:text=Other%20information%20that%20we%20collect%20automatically."
            >other information that we collect automatically</a
          >, and
          <a
            href="https://discord.com/privacy#:~:text=Cookie%20Policy.-,Information%20we%20receive%20from%20other%20sources,We%20may%20receive,-information%20about%20you"
            >Information we receive from other sources</a
          >—for the following reasons and according to these legal bases. For
          each reason, we describe why we process your information and how we
          process your information to achieve each purpose.
        </p>
        <p>‍<strong>To fulfill our contract with you</strong></p>
        <ul role="list">
          <li>
            <strong>To provide you with the services</strong>. We use your
            information to provide you with the Discord services. For example,
            when you start a video call, we process your images and audio to
            make that work. We similarly collect and store the messages you send
            and display them as you direct. We also use the information you
            provide to us to create and manage your account and to facilitate
            purchases. When you enable optional features (like connecting your
            Discord account to other platforms), we use information from those
            services to power the feature (like displaying what song you are
            listening to on another service within the Discord app).
          </li>
          <li>
            <strong>To meet our commitments to the Discord community</strong>.
            We work hard to try to make Discord a safe, positive, and inclusive
            place. To do so, we use your information to monitor for and take
            action against users and content that violate our
            <a href="http://discord.com/terms">Terms of Service</a>,
            <a href="https://discord.com/guidelines">Community Guidelines</a>,
            and
            <a
              href="https://support.discord.com/hc/en-us/articles/4420312247575"
              >other policies</a
            >. This includes responding to user reports, generating
            transcriptions of content as part of our investigation, detecting
            fraud and malware, and proactively scanning attachments and other
            content for illegal or harmful activity. We also use certain
            information, which may include content reported to us, content that
            violates our
            <a href="http://discord.com/terms">Terms of Service</a>, and certain
            other content widely available on the service (such as public posts,
            usernames, avatars, banners, user profiles, server names, server
            icons, and server banners),
            <a href="https://discord.com/privacy#2"
              >to create systems and models</a
            >
            that can be automated to more swiftly detect, categorize, and take
            action against prohibited content or conduct.
          </li>
          <li>
            <strong>To contact you</strong>. We use your information to contact
            you in connection with your account, such as to verify or secure it
            with two-factor authentication. We may also use your information to
            contact you about important product or policy changes and to send
            you information about products you have purchased.
          </li>
          <li>
            <strong>To provide customer service</strong>. We use your
            information to respond to your questions about our products and
            services, and to investigate bugs or other issues.
          </li>
        </ul>
        <p><strong>For our legitimate business interests</strong></p>
        <ul role="list">
          <li>
            <strong>To protect our services</strong>. We use your information to
            keep our services secure, to prevent misuse, and to enforce our
            Terms of Service and other policies against users who violate them.
          </li>
          <li>
            <strong>To report on our company’s performance</strong>. We use your
            information to track the fundamental metrics of our business, to
            perform financial reporting, to respond to regulatory obligations,
            and to debug billing issues.
          </li>
          <li>
            <strong>To personalize the product</strong>. We use your information
            to personalize our services. This information is used to customize
            your experience on Discord such as what you see on our discovery
            surfaces (so that you see relevant communities, activities,
            applications, or content first) or features that highlight activity
            on Discord that may interest you. This information also helps us
            surface Discord features and promotions from us and our partners
            that may be of interest to you. As discussed in the “<a
              href="https://discord.com/privacy#8"
              >How to control your privacy</a
            >” section below, you can choose to what extent we will use your
            personal information to personalize your Discord experience.
          </li>
          <li>
            <strong>To improve our services</strong>. We use your information to
            help us understand how users interact with our services, what
            features or products users may want, to develop features that make
            Discord safer and better to use, or to otherwise understand and
            improve our services. This includes information about how you use
            our services and how servers are structured. We may also use certain
            content that is widely available to better understand, for example,
            what topics servers cover and what content is most interesting
            within those servers. Similarly, you can limit to what extent we use
            your personal information for these purposes.
          </li>
          <li>
            <strong
              >To advertise our services on Discord and other platforms</strong
            >. We are proud of the product we've built. We may tell you about
            our paid services and other features directly in the services and
            through our own channels, and we spend money advertising Discord on
            other platforms. As part of that, we use certain information to
            assist in the delivery of our advertising, to measure the
            effectiveness of advertisements for our own products, and to improve
            such advertisements in the future.
          </li>
          <li>
            <strong>To contact you</strong>. We may use your information to let
            you know about new products or features we think you’ll like, to ask
            you for feedback about our services, or to tell you about
            experiments that might interest you. You may opt-out of receiving
            such marketing communications. Where local law requires, we will
            obtain your consent before sending such communications.
          </li>
        </ul>
        <p><strong>To comply with our legal obligations</strong></p>
        <p>
          We retain and use your information in connection with potential legal
          claims when necessary and for compliance, regulatory, and auditing
          purposes. For example, we retain information where we are required by
          law or if we are compelled to do so by a court order or regulatory
          body. Also, when you exercise any of your applicable legal rights to
          access, amend, or delete your personal information, we may request
          additional information from you for the purpose of confirming your
          identity.
        </p>
        <p>‍<strong>With your consent</strong></p>
        <p>
          ‍We may also collect and use personal information with your consent,
          such as to send you marketing communications where legally required.
          You can revoke your consent at any time (mostly through our services
          directly), though note that you might not be able to use any service
          or feature that requires collection or use of that personal
          information.
        </p>
        <p>‍<strong>To protect someone’s vital interests</strong></p>
        <p>
          We may collect or share personal data if we think someone’s life is in
          danger—for example, to help resolve an urgent medical situation.
        </p>
      </div>
      <div id="5" class="rich-guidlines-negative_new w-richtext">
        <h2>How we disclose your information</h2>
        <ul role="list">
          <li>
            <strong>When you tell us to</strong>. When you add your content to
            the services, you are telling us to make that content available to
            certain people or communities. Who can access that information is
            determined by who can access a particular space. For servers, those
            permissions are set by server owners or admins. They control whether
            a server requires an invite link or is open and accessible to
            anyone. And these permissions, like the size of the server, may
            change over time. Similarly, if you link your Discord account with a
            third-party service (like a music-streaming service or gaming
            platform), embed content, interact with third party content posted
            on Discord, or participate in a server that has third-party features
            like bots enabled, we may provide certain information to that
            service or to other Discord users to operate that service or
            feature. Additionally, if you purchase goods or services from other
            users on Discord, we may disclose certain information to these users
            in order to facilitate the delivery of the goods or services
            purchased or help them understand and improve their business. We may
            also disclose your information as you otherwise instruct us or
            provide us your consent to do so.
          </li>
          <li>
            <strong>With our vendors</strong>. We may provide information to
            vendors we hire to carry out specific work for us. This includes
            payment processors like Stripe and PayPal that process transactions
            on our behalf and cloud providers like Google that host our data and
            our services. We may also provide limited information to advertising
            platforms to help us reach people that we think will like our
            products and to measure the performance of our ads shown on those
            platforms. We do this to help bring more users to Discord and make
            our business successful, and provide only the information required
            to facilitate these services. This may include information like the
            fact that you installed our app or registered to use Discord.
          </li>
          <li>
            <strong>To comply with the law</strong>. We may disclose information
            in response to a request for information if we believe disclosure is
            required by law, including meeting national security or law
            enforcement requirements. Where allowed and feasible, we will
            attempt to provide you with prior notice before disclosing your
            information in response to such a request. Our
            <a href="https://discord.com/safety-transparency"
              >Transparency Report</a
            >
            has additional information about how we respond to requests from
            governments and law enforcement entities.
          </li>
          <li>
            <strong>In an emergency</strong>. We may disclose information if we
            believe in good faith that it's necessary to prevent serious harm to
            a person.
          </li>
          <li>
            <strong>To enforce our policies and rights</strong>. We may disclose
            information if needed to enforce our
            <a href="http://www.discord.com/terms">Terms of Service</a>,
            <a href="http://www.discord.com/guidelines">Community Guidelines</a
            >, any of our
            <a
              href="https://support.discord.com/hc/en-us/articles/4420312247575"
              >other policies</a
            >, or to protect the rights, property, and safety of ourselves and
            others.
          </li>
          <li>
            <strong>With our related companies</strong>. We may provide
            information to
            <a href="https://support.discord.com/hc/articles/4410339409047"
              >our related companies</a
            >, including parents, affiliates, subsidiaries, and other companies
            under common control and ownership.
          </li>
          <li>
            <strong>Sale, Acquisition, or Transfer of Assets</strong>. We may
            disclose information if Discord is evaluating and/or engaging in a
            merger, acquisition, reorganization, bankruptcy, or sale, transfer,
            or change in ownership of Discord or any of its assets.<strong
              >‍</strong
            >
          </li>
          <li>
            <strong>Aggregated or de-identified information</strong>. We may
            disclose information that has been aggregated or anonymized such
            that it cannot reasonably be used to identify you. For example, we
            may share aggregated user statistics in order to describe our
            business, features, or promotions to partners or the public.
          </li>
        </ul>
      </div>
      <div id="6" class="rich-guidlines-negative_new w-richtext">
        <h2>Data retention</h2>
        <p>
          We retain personal information until we determine it is no longer
          needed for the processing purposes for which we collected or retain it
          or for legal compliance. You can learn more about data retention
          periods in
          <a href="https://support.discord.com/hc/en-us/articles/5431812448791"
            >our data retention policy</a
          >.
        </p>
      </div>
      <div id="7" class="rich-guidlines-negative_new w-richtext">
        <h2>How we protect your information</h2>
        <p>
          We take a number of steps to help protect your information. All
          information sent within our services is encrypted both in transit and
          at rest. For example, we use Transport Layer Security (“TLS”) to
          encrypt text and images in transit. We also enforce technical and
          administrative access controls to limit which of our employees and
          contractors have access to nonpublic personal information. You can
          help maintain the security of your account by
          <a
            href="https://support.discord.com/hc/en-us/articles/219576828-Setting-up-Two-Factor-Authentication"
            >configuring two-factor authentication</a
          >.
        </p>
      </div>
      <div id="8" class="rich-guidlines-negative_new w-richtext">
        <h2>How to control your privacy</h2>
        <p>
          We believe that users should be able to tailor their Discord
          experience to their preferences, including privacy. And while local
          laws may require different things, we believe that our users should
          have at least the same basic ability to shape their experience no
          matter where they are in the world. Here’s how you can control how we
          process your information, how to delete or correct certain
          information, and how to request access to your information. Users in
          certain places may have specific rights under their local laws. You
          can learn more about these in the relevant sections below.
        </p>
        <p>
          ‍<strong
            >Be aware of the Discord spaces you choose to participate in</strong
          >
        </p>
        <p>
          You can choose what spaces to participate in and what information you
          add to our services. You can choose what messages to send or post, who
          to engage with (e.g., one or more particular users or a potentially
          unlimited group of users), what information to include in your
          profile, whether to connect any third party services to your Discord
          account, and more. For example, if you share content in certain
          spaces, such as servers listed in Server Discovery or with public
          invite links, your content may be accessed by anyone.&nbsp;
        </p>
        <p>‍<strong>Customize your personal Discord settings</strong></p>
        <p>
          We offer a number of settings that allow you to tailor your experience
          within Discord. Some of these relate to specific features: for
          example, you can choose whether to display your current activity (like
          the game you are playing or the music you are listening to) in your
          status in your User Settings page (this is the gear icon next to your
          username).
        </p>
        <p>
          You can also access other privacy-related settings in your User
          Settings. For example, you can decide whether to filter potentially
          explicit content, who can add you as a friend, and more. This is also
          where you can limit certain types of processing of your information:
        </p>
        <ul role="list">
          <li>
            <strong
              >Limit our ability to use your data to improve our
              services</strong
            >. We offer certain settings that allow you to limit the information
            we collect to help us understand how users use our services, what
            features or products they may want, or to otherwise help us improve
            our business. If you turn off these settings, we will stop
            collecting and using certain event and log information as described
            in these settings.
          </li>
          <li>
            <strong>Limit our ability to personalize Discord for you</strong>.
            We offer certain settings that control whether and how we may
            personalize Discord for you, such as offering you relevant
            recommendations for in-app content and features. If these settings
            are disabled, we will stop collecting and using certain event and
            log information as described in these settings.
          </li>
        </ul>
        <p>
          You can learn more about these and other privacy-related settings
          <a
            href="https://support.discord.com/hc/en-us/articles/360004109911-Data-Privacy-Controls"
            >in our Help Center</a
          >. The default and availability of some of these settings may be
          different depending on factors like your
          <a
            href="https://support.discord.com/hc/en-us/articles/18210995019671-Discord-Sensitive-Content-Filters).%22"
            >age</a
          >
          or location.
        </p>
        <p><strong>Disable or delete your account</strong></p>
        <p>
          You can disable or delete your account via the User Settings menu.
          Disabling your account stops the processing of new data, but allows
          you to reactivate your account without interruption to you. Deleting
          your account permanently deletes identifying information and
          anonymizes other data as described in
          <a href="https://support.discord.com/hc/en-us/articles/5431812448791"
            >our data retention policy</a
          >. You can learn more about how to delete your account in
          <a
            href="https://support.discord.com/hc/en-us/articles/212500837-How-do-I-permanently-delete-my-account-"
            >this Help Center article</a
          >
          and how to disable your account in
          <a
            href="https://support.discord.com/hc/en-us/articles/360004066391-How-Do-I-Disable-My-Account-"
            >this Help Center article</a
          >.
        </p>
        <p><strong>Manage your content and servers</strong></p>
        <p>
          You may edit or delete specific pieces of information within the
          services:
        </p>
        <ul role="list">
          <li>
            You can edit or delete any message you have sent or content you have
            posted if you still have access to the space where you posted it.
          </li>
          <li>
            You can edit or delete a Discord server if you have the permissions
            needed to do so.
          </li>
          <li>
            You can edit or delete a channel from a Discord server if you have
            the permissions needed to do so.
          </li>
        </ul>
        <p>
          Content may be retained by Discord for use as described elsewhere in
          this policy and in
          <a href="https://support.discord.com/hc/en-us/articles/5431812448791"
            >our data retention policy</a
          >. Also, in limited circumstances, we may have a legal obligation to
          retain certain information, even if you delete the information or your
          account.
        </p>
        <p><strong>Access your information</strong></p>
        <p>
          If you want to see what information we have collected about you, you
          can request a copy of your data in the Privacy &amp; Safety section of
          your User Settings. You should receive your data packet within 30
          days. Data is delivered in common digital formats including CSV, JSON,
          and any other file format you used when uploading attachments to the
          services. You can learn more about how to access your information
          <a
            href="https://support.discord.com/hc/en-us/articles/360004027692-Requesting-a-Copy-of-your-Data"
            >in our Help Center</a
          >.
        </p>
      </div>
      <div id="9" class="rich-guidlines-negative_new w-richtext">
        <h2>International data transfers</h2>
        <p>
          We are based in the United States, and we process and store
          information on servers located in the United States. We may also store
          information on servers and equipment in other countries depending on a
          variety of factors, including the locations of our users and service
          providers. These data transfers allow us to provide our services to
          you. By accessing or using our services or otherwise providing
          information to us, you understand that your information will be
          processed, transferred, and stored in the U.S. and other countries,
          where different data protection standards may apply and/or you may not
          have the same rights as you do under local law.
        </p>
        <p>
          When transferring data outside the EEA, we use
          <a
            href="https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:32021D0914&amp;from=EN"
            >standard contract clauses</a
          >
          (Module 1 and Module 2), and we rely on the European Commission's
          <a
            href="https://ec.europa.eu/info/law/law-topic/data-protection/data-transfers-outside-eu/adequacy-protection-personal-data-non-eu-countries_en"
            >adequacy decisions</a
          >
          about certain countries, as applicable, or other legally compliant
          mechanisms or conditions for such data transfer.
        </p>
        <p>
          Discord and its U.S. entities/subsidiaries (Backgammon Merger Sub II,
          LLC, Brazos Games, LLC, Discord International, Inc, Flames Sub LLC,
          and Sentropy Technologies Inc.) also comply with the EU-U.S. and
          Swiss-U.S. Data Privacy Frameworks, as well as the UK Extension to the
          EU-U.S. Data Privacy Framework. If you have questions or complaints
          regarding our compliance with the Data Privacy Framework principles,
          please reach out to us at privacy@discord.com. If we do not resolve
          your complaint, you may submit your complaint free of charge to
          <a href="https://www.jamsadr.com/eu-us-privacy-shield">JAMS</a>. Under
          certain conditions specified by the Data Privacy Framework principles,
          you may also be able to invoke binding arbitration to resolve your
          complaint. We are subject to the investigatory and enforcement powers
          of the U.S. Federal Trade Commission. In certain circumstances, we may
          be liable for the transfer of personal data from the EU, Switzerland,
          or the UK to a third party outside those countries. If there is any
          conflict between the terms in our privacy policy and the EU-U.S. DPF
          Principles and/or the Swiss-U.S. DPF Principles, the Principles shall
          govern.
        </p>
        <p>
          For more information about the Data Privacy Framework principles and
          to view our certification, please visit the U.S. Department of
          Commerce’s
          <a href="https://www.dataprivacyframework.gov/s/"
            >Data Privacy Framework site</a
          >.
        </p>
      </div>
      <div id="10" class="rich-guidlines-negative_new w-richtext">
        <h2>Services offered by third parties</h2>
        <p>
          We allow third party developers to build certain features or other
          services and offer them within the Discord services. For example,
          server administrators can add “bots” created by third party developers
          that provide features like content moderation and interactive games.
          Similarly, you may have access to games or activities built by third
          parties within the services.
        </p>
        <p>
          These third-party services need to follow all policies that apply to
          them (including often our
          <a href="https://discord.com/developers/docs/legal"
            >Developer Terms of Service</a
          >
          and
          <a href="https://discord.com/developers/docs/policy"
            >Developer Policy</a
          >). As part of these policies, we require developers to have a privacy
          policy that makes clear what they do with your information. Please
          review these privacy policies, as they describe what bots and apps may
          do with your information. We also require that certain popular bots
          apply for access to certain data. But because these services are
          operated by third parties, we don’t control them or what information
          they collect. It’s up to you whether to participate in a server that
          uses bots, and whether to engage with third-party services in general.
        </p>
      </div>
      <div id="11" class="rich-guidlines-negative_new w-richtext">
        <h2>Data Protection Officer</h2>
        <p>
          You can contact Discord Netherlands BV’s Data Protection Officer at
          <a href="mailto:dpo@discord.com">dpo@discord.com</a>.
        </p>
        <p>
          We’ve appointed VeraSafe as Discord’s representative in the United
          Kingdom for data protection matters, pursuant to Article 27 of the UK
          General Data Protection Regulation. See the section “Contact Us”
          below. You can contact VeraSafe only on matters related to the
          processing of personal data.
        </p>
      </div>
      <div id="12" class="rich-guidlines-negative_new w-richtext">
        <h2>Information about local privacy laws</h2>
        <p>
          Certain local laws, such as the European Union’s General Data
          Protection Regulation (GDPR), Brazil’s Lei Geral de Proteção de Dados
          (LGPD), and California’s Consumer Privacy Act (CCPA), require services
          to provide information about the information they collect, how they
          use it, and the lawful basis for processing it. We’ve described most
          of that already in the earlier portions of this Policy, but you can
          find state and region specific information and disclosures
          <a href="https://discord.com/terms/local-laws">here</a>.
        </p>
        <p>
          <strong>‍Exercising your rights:</strong> As described in the “<a
            href="https://discord.com/privacy#control"
            >How to control your privacy”</a
          >
          section above, all our users have control over their information and
          can directly edit or delete information from their account and limit
          what data we process. If you are located in certain regions, including
          the European Union, you may have additional rights such as those
          listed below, and as outlined in the
          <a href="https://discord.com/terms/local-laws"
            >state and region specific information</a
          >
          and disclosures that you can exercise through the Discord app directly
          or by contacting us:
        </p>
        <ul role="list">
          <li>Right of access to your personal data</li>
          <li>Right to rectify your personal data if it is incorrect</li>
          <li>Right to erase your personal data</li>
          <li>Right to limit the processing of your personal data</li>
          <li>Right to the portability of your personal data</li>
          <li>Right to object to the processing of your personal data</li>
          <li>
            Right to withdraw consent. Withdrawing consent does not affect the
            lawfulness of processing based on consent before withdrawal.
          </li>
        </ul>
        <p>
          If you have any questions about these rights or wish to exercise
          control over your information, please reach out to
          privacy@discord.com.
        </p>
      </div>
      <div id="13" class="rich-guidlines-negative_new w-richtext">
        <h2>Changes to this Privacy Policy</h2>
        <p>
          We will update this Privacy Policy from time to time. We always
          indicate the date the last changes were published, and if changes are
          significant, we’ll provide a more prominent notice as required by law,
          such as by emailing you or highlighting the changes within the
          services.
        </p>
      </div>
      <div id="14" class="rich-guidlines-negative_new w-richtext">
        <h2>Contact us</h2>
        <p>
          Email us at privacy@discord.com with any questions about this Privacy
          Policy or how we process your information. We’ll be happy to help.
        </p>
        <p>
          To contact Discord’s Data Protection Officer, please email
          dpo@discord.com.
        </p>
        <p>
          You can also reach us by mail if you want. If you reside in the EEA or
          United Kingdom, you can contact us at:&nbsp;
        </p>
        <p>Discord Netherlands BV&nbsp;</p>
        <p>ATTN: Privacy Policy&nbsp;</p>
        <p>Schiphol Boulevard 195 <br />1118 BG Schiphol, <br />Netherlands</p>
        <p>If you reside anywhere else, you can contact us at:&nbsp;</p>
        <p>Discord Inc.&nbsp;</p>
        <p>ATTN: Privacy Policy&nbsp;</p>
        <p>444 De Haro Street #200&nbsp;</p>
        <p>San Francisco, CA 94107, USA.</p>
        <p>
          If you reside in the United Kingdom, you can also contact VeraSafe,
          Discord’s appointed representative for data protection matters related
          to the processing of personal data, using this contact form:
          <a
            href="https://verasafe.com/public-resources/contact-data-protection-representative"
            >https://verasafe.com/public-resources/contact-data-protection-representative</a
          >
          or via telephone at +420 228 881 031. VeraSafe’s mailing address is:
        </p>
        <p>VeraSafe United Kingdom Ltd.&nbsp;</p>
        <p>37 Albert Embankment&nbsp;</p>
        <p>London SE1 7TL United Kingdom</p>
      </div>
      <div
        id="15"
        class="rich-guidlines-negative_new w-dyn-bind-empty w-richtext"
      ></div>
      <div
        id="16"
        class="rich-guidlines-negative_new w-dyn-bind-empty w-richtext"
      ></div>
      <div
        id="17"
        class="rich-guidlines-negative_new w-condition-invisible w-dyn-bind-empty w-richtext"
      ></div>
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
