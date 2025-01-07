"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["22942"],
  {
    84717: function (e) {
      e.exports = "/assets/88d334b456f20031e82c.svg";
    },
    660727: function (e, n, o) {
      o.r(n), o(47120);
      var a,
        t,
        i = o(200651),
        l = o(192379),
        r = o(120356),
        s = o.n(r),
        d = o(481060),
        c = o(211266),
        u = o(313201),
        p = o(907040),
        v = o(906411),
        f = o(813197),
        b = o(984933),
        m = o(768581),
        I = o(956664),
        j = o(185923),
        x = o(388032),
        h = o(189234),
        N = o(84717);
      ((t = a || (a = {})).TAB_ID_FILE_UPLOAD = "tab-id-role-icon-file-upload"),
        (t.TAB_ID_EMOJI = "tab-id-role-icon-emoji");
      function B() {
        return [
          {
            name: x.intl.string(x.t.Sp2NFx),
            extensions: ["jpg", "jpeg", "png"],
          },
        ];
      }
      async function _(e) {
        let n = (0, m.gT)({ id: e.id, animated: !1, size: 48, forcePNG: !0 }),
          o = await fetch(n),
          a = await o.blob();
        return await (0, I.fD)(a);
      }
      n.default = function (e) {
        let {
            guildId: n,
            onUploadIcon: o,
            onSelectUnicodeEmoji: a,
            onClose: t,
            transitionState: r,
          } = e,
          m = (0, u.Dt)(),
          I = b.ZP.getDefaultChannel(n),
          [g, C] = l.useState("tab-id-role-icon-file-upload"),
          [S, k] = l.useState(!1),
          z = (0, c.Z)(B);
        return (
          l.useEffect(() => {
            k(!1);
          }, [g]),
          (0, i.jsx)(d.ModalRoot, {
            transitionState: r,
            "aria-labelledby": m,
            size: d.ModalSize.MEDIUM,
            className: h.modalRoot,
            children: (0, i.jsxs)("div", {
              className: h.contentWrapper,
              children: [
                (0, i.jsx)("nav", {
                  className: s()(h.nav, {
                    [h.navUploadSelected]: "tab-id-role-icon-file-upload" === g,
                  }),
                  children: (0, i.jsxs)("div", {
                    className: h.navList,
                    role: "tablist",
                    "aria-label": "Expression Picker",
                    children: [
                      (0, i.jsx)("div", {
                        className: h.navItem,
                        role: "tab",
                        "aria-controls": "tab-id-role-icon-file-upload",
                        "aria-selected": "tab-id-role-icon-file-upload" === g,
                        children: (0, i.jsx)(d.Button, {
                          onClick: () => {
                            C("tab-id-role-icon-file-upload");
                          },
                          "aria-current": "page",
                          className: s()(h.navButton, {
                            [h.navButtonActive]:
                              "tab-id-role-icon-file-upload" === g,
                          }),
                          look: d.Button.Looks.BLANK,
                          size: d.Button.Sizes.NONE,
                          children: x.intl.string(x.t.royWSE),
                        }),
                      }),
                      (0, i.jsx)("div", {
                        className: h.navItem,
                        role: "tab",
                        "aria-controls": "tab-id-role-icon-emoji",
                        "aria-selected": "tab-id-role-icon-emoji" === g,
                        children: (0, i.jsx)(d.Button, {
                          onClick: () => {
                            C("tab-id-role-icon-emoji");
                          },
                          "aria-current": "page",
                          className: s()(h.navButton, {
                            [h.navButtonActive]: "tab-id-role-icon-emoji" === g,
                          }),
                          look: d.Button.Looks.BLANK,
                          size: d.Button.Sizes.NONE,
                          children: x.intl.string(x.t["/Ny2wc"]),
                        }),
                      }),
                    ],
                  }),
                }),
                "tab-id-role-icon-file-upload" === g
                  ? (0, i.jsx)(d.ModalContent, {
                      children: (0, i.jsxs)("div", {
                        className: h.uploadContainer,
                        children: [
                          (0, i.jsxs)("div", {
                            className: h.uploadIconOuterContainer,
                            children: [
                              (0, i.jsx)("img", { src: N, alt: "sparkles" }),
                              (0, i.jsx)("div", {
                                className: h.uploadIconInnerContainer,
                                children: (0, i.jsx)(d.ImagePlusIcon, {
                                  size: "md",
                                  color: "currentColor",
                                  className: h.uploadIcon,
                                }),
                              }),
                            ],
                          }),
                          (0, i.jsx)("div", {
                            className: h.uploadInfo,
                            children: x.intl.string(x.t["mz++Qk"]),
                          }),
                          (0, i.jsxs)(d.Button, {
                            size: d.Button.Sizes.SMALL,
                            children: [
                              x.intl.string(x.t.sdCQY2),
                              (0, i.jsx)(f.ZP, {
                                onChange: (e) => {
                                  k(!1), o(e), t();
                                },
                                onFileSizeError: () => {
                                  k(!0);
                                },
                                maxFileSizeBytes: 256e3,
                                multiple: !1,
                                filters: z,
                              }),
                            ],
                          }),
                          S
                            ? (0, i.jsx)(d.Text, {
                                className: h.uploadError,
                                color: "text-danger",
                                variant: "text-sm/normal",
                                children: x.intl.string(x.t.HFyKsb),
                              })
                            : null,
                        ],
                      }),
                    })
                  : null,
                "tab-id-role-icon-emoji" === g
                  ? (0, i.jsx)(p.Z, {
                      hasTabWrapper: !0,
                      closePopout: () => t(),
                      onSelectEmoji: async (e) => {
                        if ((null == e ? void 0 : e.id) != null)
                          (null == e ? void 0 : e.type) === v.B.GUILD &&
                            o(await _(e));
                        else if ((null == e ? void 0 : e.surrogates) != null) {
                          var n, i;
                          a(
                            null !==
                              (i =
                                null === (n = e.defaultDiversityChild) ||
                                void 0 === n
                                  ? void 0
                                  : n.surrogates) && void 0 !== i
                              ? i
                              : e.surrogates,
                          );
                        }
                        t();
                      },
                      pickerIntention: j.Hz.COMMUNITY_CONTENT,
                      channel: I,
                    })
                  : null,
              ],
            }),
          })
        );
      };
    },
    189234: function (e, n, o) {
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
//# sourceMappingURL=be48f0362ec805ce5592.js.map
