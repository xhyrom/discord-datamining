"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["22942"],
  {
    84717: function (e) {
      e.exports = "/assets/88d334b456f20031e82c.svg";
    },
    660727: function (e, a, o) {
      o.r(a), o(47120);
      var n,
        t,
        l = o(735250),
        i = o(470079),
        s = o(120356),
        r = o.n(s),
        d = o(77866),
        c = o(481060),
        u = o(313201),
        p = o(907040),
        v = o(906411),
        f = o(813197),
        I = o(984933),
        _ = o(768581),
        b = o(956664),
        m = o(185923),
        N = o(689938),
        j = o(99839),
        O = o(84717);
      ((t = n || (n = {})).TAB_ID_FILE_UPLOAD = "tab-id-role-icon-file-upload"),
        (t.TAB_ID_EMOJI = "tab-id-role-icon-emoji");
      function x() {
        return [
          { name: N.Z.Messages.IMAGES, extensions: ["jpg", "jpeg", "png"] },
        ];
      }
      async function h(e) {
        let a = (0, _.gT)({ id: e.id, animated: !1, size: 48, forcePNG: !0 }),
          o = await fetch(a),
          n = await o.blob();
        return await (0, b.fD)(n);
      }
      a.default = function (e) {
        let {
            guildId: a,
            onUploadIcon: o,
            onSelectUnicodeEmoji: n,
            onClose: t,
            transitionState: s,
          } = e,
          _ = (0, u.Dt)(),
          b = I.ZP.getDefaultChannel(a),
          [B, C] = i.useState("tab-id-role-icon-file-upload"),
          [E, L] = i.useState(!1),
          g = (0, d.Z)(x);
        return (
          i.useEffect(() => {
            L(!1);
          }, [B]),
          (0, l.jsx)(c.ModalRoot, {
            transitionState: s,
            "aria-labelledby": _,
            size: c.ModalSize.MEDIUM,
            className: j.modalRoot,
            children: (0, l.jsxs)("div", {
              className: j.contentWrapper,
              children: [
                (0, l.jsx)("nav", {
                  className: r()(j.nav, {
                    [j.navUploadSelected]: "tab-id-role-icon-file-upload" === B,
                  }),
                  children: (0, l.jsxs)("div", {
                    className: j.navList,
                    role: "tablist",
                    "aria-label": "Expression Picker",
                    children: [
                      (0, l.jsx)("div", {
                        className: j.navItem,
                        role: "tab",
                        "aria-controls": "tab-id-role-icon-file-upload",
                        "aria-selected": "tab-id-role-icon-file-upload" === B,
                        children: (0, l.jsx)(c.Button, {
                          onClick: () => {
                            C("tab-id-role-icon-file-upload");
                          },
                          "aria-current": "page",
                          className: r()(j.navButton, {
                            [j.navButtonActive]:
                              "tab-id-role-icon-file-upload" === B,
                          }),
                          look: c.Button.Looks.BLANK,
                          size: c.Button.Sizes.NONE,
                          children: N.Z.Messages.ROLE_ICON_TAB_UPLOAD_IMAGE,
                        }),
                      }),
                      (0, l.jsx)("div", {
                        className: j.navItem,
                        role: "tab",
                        "aria-controls": "tab-id-role-icon-emoji",
                        "aria-selected": "tab-id-role-icon-emoji" === B,
                        children: (0, l.jsx)(c.Button, {
                          onClick: () => {
                            C("tab-id-role-icon-emoji");
                          },
                          "aria-current": "page",
                          className: r()(j.navButton, {
                            [j.navButtonActive]: "tab-id-role-icon-emoji" === B,
                          }),
                          look: c.Button.Looks.BLANK,
                          size: c.Button.Sizes.NONE,
                          children: N.Z.Messages.ROLE_ICON_TAB_EMOJI,
                        }),
                      }),
                    ],
                  }),
                }),
                "tab-id-role-icon-file-upload" === B
                  ? (0, l.jsx)(c.ModalContent, {
                      children: (0, l.jsxs)("div", {
                        className: j.uploadContainer,
                        children: [
                          (0, l.jsxs)("div", {
                            className: j.uploadIconOuterContainer,
                            children: [
                              (0, l.jsx)("img", { src: O, alt: "sparkles" }),
                              (0, l.jsx)("div", {
                                className: j.uploadIconInnerContainer,
                                children: (0, l.jsx)(c.ImagePlusIcon, {
                                  size: "md",
                                  color: "currentColor",
                                  className: j.uploadIcon,
                                }),
                              }),
                            ],
                          }),
                          (0, l.jsx)("div", {
                            className: j.uploadInfo,
                            children: N.Z.Messages.ROLE_ICON_UPLOAD_FILES_INFO,
                          }),
                          (0, l.jsxs)(c.Button, {
                            size: c.Button.Sizes.SMALL,
                            children: [
                              N.Z.Messages.ROLE_ICON_UPLOAD_BROWSE_FILES,
                              (0, l.jsx)(f.ZP, {
                                onChange: (e) => {
                                  L(!1), o(e), t();
                                },
                                onFileSizeError: () => {
                                  L(!0);
                                },
                                maxFileSizeBytes: 256e3,
                                multiple: !1,
                                filters: g,
                              }),
                            ],
                          }),
                          E
                            ? (0, l.jsx)(c.Text, {
                                className: j.uploadError,
                                color: "text-danger",
                                variant: "text-sm/normal",
                                children:
                                  N.Z.Messages.ROLE_ICON_UPLOAD_FILE_TOO_BIG,
                              })
                            : null,
                        ],
                      }),
                    })
                  : null,
                "tab-id-role-icon-emoji" === B
                  ? (0, l.jsx)(p.Z, {
                      hasTabWrapper: !0,
                      closePopout: () => t(),
                      onSelectEmoji: async (e) => {
                        if ((null == e ? void 0 : e.id) != null)
                          (null == e ? void 0 : e.type) === v.B.GUILD &&
                            o(await h(e));
                        else if ((null == e ? void 0 : e.surrogates) != null) {
                          var a, l;
                          n(
                            null !==
                              (l =
                                null === (a = e.defaultDiversityChild) ||
                                void 0 === a
                                  ? void 0
                                  : a.surrogates) && void 0 !== l
                              ? l
                              : e.surrogates,
                          );
                        }
                        t();
                      },
                      pickerIntention: m.Hz.COMMUNITY_CONTENT,
                      channel: b,
                    })
                  : null,
              ],
            }),
          })
        );
      };
    },
    99839: function (e, a, o) {
      e.exports = {
        modalRoot: "modalRoot_f98b35",
        contentWrapper: "contentWrapper_f98b35",
        nav: "nav_f98b35",
        navUploadSelected: "navUploadSelected_f98b35",
        navList: "navList_f98b35",
        navItem: "navItem_f98b35",
        navButton: "navButton_f98b35",
        navButtonActive: "navButtonActive_f98b35",
        uploadContainer: "uploadContainer_f98b35",
        uploadIconOuterContainer: "uploadIconOuterContainer_f98b35",
        uploadIconInnerContainer: "uploadIconInnerContainer_f98b35",
        uploadIcon: "uploadIcon_f98b35",
        uploadInfo: "uploadInfo_f98b35",
        uploadError: "uploadError_f98b35",
      };
    },
  },
]);
//# sourceMappingURL=94c42c72b0707b433557.js.map
