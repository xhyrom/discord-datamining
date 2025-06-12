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
        <a href="https://discord.com/" class="nav_brand w-nav-brand"
          ><img
            width="146"
            loading="lazy"
            alt=""
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
                    href="https://discord.com/safety"
                    class="nav_link_dropdown w-inline-block"
                  ></a>
                </div>
                <nav class="nav_dd_list is-safety w-dropdown-list">
                  <div class="nav_dd_content-wr isnew">
                    <div class="nav_dd_content_layout top-none">
                      <div class="nav_dd_link-group">
                        <div class="nav_dd_link_list is-new">
                          <div class="nav_dd_link_title">Resources</div>
                          <a
                            href="https://discord.com/safety-news"
                            class="dd_nav-link"
                            >Safety News</a
                          ><a
                            href="https://discord.com/safety-library"
                            class="dd_nav-link"
                            >Safety Library</a
                          >
                        </div>
                      </div>
                      <div class="nav_dd_link-group is_2025">
                        <a
                          href="https://discord.com/guidelines"
                          class="nav_dd_link-group_title is-new-white"
                          >Community Guidelines</a
                        >
                        <div class="nav_dd_link_list">
                          <div class="nav_dd_link_title">Resources</div>
                          <a
                            href="https://discord.com/safety-privacy"
                            class="dd_nav-link w-inline-block"
                            ><div>Privacy Hub</div></a
                          ><a
                            href="https://discord.com/safety-policies"
                            class="dd_nav-link w-inline-block"
                            ><div>Policy Hub</div></a
                          ><a
                            href="https://discord.com/safety-transparency"
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
                          href="https://discord.com/safety-family-center"
                          class="nav_dd_link-group_title is-new-white"
                          >Family Center</a
                        >
                        <div class="nav_dd_link_list">
                          <div class="nav_dd_link_title">Resources</div>
                          <a
                            href="https://discord.com/safety-parents"
                            class="dd_nav-link w-inline-block"
                            ><div>Parent Hub</div></a
                          ><a
                            href="https://discord.com/safety-teen-charter"
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
                    href="https://discord.com/ads/quests"
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
                            href="https://discord.com/ads/quests"
                            class="dd_nav-link"
                            >Advertising</a
                          ><a
                            href="https://discord.com/ads/quests-success-stories"
                            class="dd_nav-link"
                            >Success Stories</a
                          ><a
                            href="https://discord.com/ads/quests-faq"
                            class="dd_nav-link"
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
                    href="https://discord.com/blog"
                    class="nav_link_dropdown w-inline-block"
                  ></a>
                </div>
                <nav class="nav_dd_list is-safety w-dropdown-list">
                  <div class="nav_dd_content-wr isnew">
                    <div class="nav_dd_content_layout top-none _1-col">
                      <div class="nav_dd_link-group">
                        <div class="nav_dd_link_list">
                          <div class="nav_dd_link_title">Collections</div>
                          <a href="https://discord.com/blog" class="dd_nav-link"
                            >Featured</a
                          ><a
                            href="https://discord.com/category/community"
                            class="dd_nav-link"
                            >Community</a
                          ><a
                            href="https://discord.com/category/company"
                            class="dd_nav-link"
                            >Discord HQ</a
                          ><a
                            href="https://discord.com/category/engineering"
                            class="dd_nav-link"
                            >Engineering &amp; Developers</a
                          ><a
                            href="https://discord.com/category/how-to-discord"
                            class="dd_nav-link"
                            >How to Discord</a
                          ><a
                            href="https://discord.com/category/safety"
                            class="dd_nav-link"
                            >Policy &amp; Safety</a
                          ><a
                            href="https://discord.com/category/product"
                            class="dd_nav-link"
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
                    href="https://discord.com/developers"
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
                            href="https://discord.com/developers/social-sdk"
                            class="dd_nav-link w-inline-block"
                            ><div>Discord Social SDK</div></a
                          ><a
                            href="https://discord.com/developers/build"
                            class="dd_nav-link w-inline-block"
                            ><div>Apps and Activities</div></a
                          >
                        </div>
                        <div class="nav_dd_link_line is-n"></div>
                        <div class="nav_dd_link_list">
                          <div class="nav_dd_link_title">Documentation</div>
                          <a
                            href="https://discord.com/developers"
                            class="dd_nav-link w-inline-block"
                            ><div>Developer Home</div></a
                          ><a
                            href="https://discord.com/developers/docs/intro"
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
                            href="https://discord.com/developers/applications"
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
            <li>
              <a href="https://discord.com/careers" class="nav_link is_careers"
                >Careers</a
              >
            </li>
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
  <div class="padding-menu"></div>
  <div class="global_section guidlines">
    <div class="container780 left-vert">
      <div class="rich-text-block w-richtext">
        <h3>Discord Company Information - Impressum</h3>
        <p>
          <strong>Discord Inc.<br /><br /></strong>Discord Inc.<br />444 De Haro
          Street<br />Suite 200<br />San Francisco, CA 94107<br />United States
          of America<br /><br />Phone: 888-594-0085<br />Email:
          <a href="mailto:support@discord.com">support@discord.com</a>
        </p>
        <p>
          Discord Customer Support:
          <a
            href="https://support.discord.com/hc/en-us/requests/new"
            target="_blank"
            >https://support.discord.com/hc/en-us/requests/new</a
          ><br /><br />Authorized Representative<br />Clint Smith, CLO<br /><br />Discord
          Inc. is a United States corporation incorporated and registered under
          the laws of the State of Delaware, USA. Registrar: 5128862, Department
          of State, State of Delaware.<br />FEIN: 45-4908598
        </p>
        <p>‍</p>
        <p>
          <strong>Discord Netherlands B.V.<br /></strong><br />Discord
          Netherlands B.V.<br />Schiphol Boulevard 195<br />1118BG Schiphol<br />Netherlands<br />
          <br />Phone: +31 20 809 0400<br />Email:
          <a href="mailto:support@discord.com">support@discord.com</a>
        </p>
        <p>
          Discord Customer Support:
          <a
            href="https://support.discord.com/hc/en-us/requests/new"
            target="_blank"
            >https://support.discord.com/hc/en-us/requests/new</a
          ><br /><br />Authorized Representative<br />Tom Marcinkowski,
          Director<br /><br />Discord Netherlands B.V. is a Dutch private
          limited liability company (B.V.) incorporated and registered under the
          laws of the Netherlands. Chamber of Commerce No. 82229864, RSIN:
          862385519.
        </p>
        <p>EU Tax ID: EU528003307 </p>
        <p><strong>ㅤ</strong></p>
        <p>ㅤ ㅤ</p>
        <p>ㅤ ㅤ ㅤ</p>
        <p>ㅤ ㅤ ㅤ ㅤ</p>
        <p>ㅤ ㅤ ㅤ ㅤ ㅤ</p>
        <p>ㅤ ㅤ ㅤ ㅤ ㅤ ㅤ</p>
        <p>‍</p>
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
          <a href="https://discord.com/" class="footer-logo-link w-inline-block"
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
                href="https://discord.com/download"
                class="link-footer top-new-link"
                >Download</a
              ><a
                data-track="nitro"
                href="https://discord.com/nitro"
                class="link-footer top-new-link"
                >Nitro</a
              ><a
                data-track="status"
                href="https://discordstatus.com/"
                class="link-footer top-new-link"
                >Status</a
              ><a
                data-track="app directory"
                href="https://discord.com/application-directory"
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
                href="https://discord.com/college"
                class="link-footer top-new-link"
                >College</a
              ><a
                data-track="support"
                href="https://support.discord.com/hc"
                class="link-footer top-new-link"
                >Support</a
              ><a
                data-track="safety"
                href="https://discord.com/safety"
                class="link-footer top-new-link"
                >Safety</a
              ><a
                data-track="blog"
                href="https://discord.com/blog"
                class="link-footer top-new-link"
                >Blog</a
              ><a
                data-track="streamkit"
                href="https://discord.com/streamkit"
                class="link-footer top-new-link"
                >StreamKit</a
              ><a
                data-track="creators"
                href="https://discord.com/creators"
                class="link-footer top-new-link"
                >Creators</a
              ><a
                data-track="community"
                href="https://discord.com/community"
                class="link-footer top-new-link"
                >Community</a
              ><a
                data-track="Build"
                href="https://discord.com/developers"
                class="link-footer top-new-link"
                >Developers</a
              ><a
                data-track="Build"
                href="https://discord.com/quests"
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
                href="https://discord.com/acknowledgements"
                class="link-footer top-new-link"
                >Acknowledgements</a
              ><a
                data-track="licenses"
                href="https://discord.com/licenses"
                class="link-footer top-new-link"
                >Licenses</a
              ><a
                data-track="moderation"
                href="https://discord.com/company-information"
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
