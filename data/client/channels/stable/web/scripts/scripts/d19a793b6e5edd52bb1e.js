"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["4536"],
  {
    367424: function (a) {
      a.exports = "/assets/3338acc43b98491ee2e2.svg";
    },
    422677: function (a, n, e) {
      e.r(n),
        e.d(n, {
          default: function () {
            return g;
          },
        }),
        e(47120);
      var i = e(735250),
        o = e(470079),
        t = e(729594),
        l = e(243814),
        s = e(481060),
        c = e(367907),
        d = e(906732),
        r = e(240991),
        p = e(69580),
        m = e(484459),
        u = e(171368),
        N = e(768581),
        _ = e(63063),
        A = e(591759),
        C = e(556084),
        h = e(981631),
        x = e(689938),
        I = e(516579),
        R = e(367424);
      let E = new Set(["Spacebar", " ", "Enter"]);
      function g(a) {
        let { channelId: n, transitionState: e, onClose: g } = a,
          { analyticsLocations: M } = (0, d.ZP)(),
          {
            fetched: T,
            applicationsShelf: j,
            installedIntegrations: L,
          } = (0, C.j)({ channelId: n });
        o.useEffect(() => {
          (0, c.yw)(h.rMx.GDM_STARTER_APPS_VIEWED);
        }, []);
        let P = (a) => {
            var n;
            (0, m.Z)(
              null !== (n = null == a ? void 0 : a.id) && void 0 !== n ? n : "",
              null == a ? void 0 : a.getAvatarURL(void 0, 80),
              { dispatchWait: !0 },
            );
          },
          w = (a, n) => {
            E.has(a.key) && P(n);
          },
          k = o.useCallback(
            (a) => {
              let { application: n, location: e } = a;
              if (null == e) return !1;
              let { host: i, path: o } = t.parse(e, !0);
              return (
                (!!A.Z.isDiscordHostname(i) || window.location.host === i) &&
                o === h.Z5c.OAUTH2_AUTHORIZED &&
                (null != n && g(), !0)
              );
            },
            [g],
          );
        return (0, i.jsxs)(s.ModalRoot, {
          transitionState: e,
          size: s.ModalSize.DYNAMIC,
          className: I.modal,
          children: [
            (0, i.jsx)(s.ModalContent, {
              className: I.modalContent,
              children: (0, i.jsxs)(i.Fragment, {
                children: [
                  (0, i.jsx)("img", { src: R, alt: "", className: I.image }),
                  (0, i.jsxs)("div", {
                    className: I.headingContainer,
                    children: [
                      (0, i.jsx)(s.Heading, {
                        variant: "heading-xl/bold",
                        className: I.modalHeader,
                        children: x.Z.Messages.PRIVATE_CHANNEL_AVAILABLE_APPS,
                      }),
                      (0, i.jsx)(s.Text, {
                        variant: "text-md/medium",
                        className: I.modalHeader,
                        children:
                          x.Z.Messages.PRIVATE_CHANNEL_INTEGRATION_MORE_APPS_INFO_LINKED.format(
                            {
                              helpCenterLink: _.Z.getArticleURL(
                                h.BhN.PRIVATE_CHANNEL_INTEGRATIONS,
                              ),
                            },
                          ),
                      }),
                    ],
                  }),
                  (0, i.jsx)("div", {
                    className: I.applicationRowContainer,
                    children: T
                      ? j.map((a) => {
                          if (null != L.find((n) => n.application.id === a.id))
                            return null;
                          let e =
                              null != a.description
                                ? (0, r.YP)(a.description)
                                : null,
                            o = N.ZP.getApplicationIconURL({
                              id: a.id,
                              icon: a.icon,
                              size: 40,
                            }),
                            t = (0, i.jsxs)(i.Fragment, {
                              children: [
                                null != o &&
                                  (0, i.jsx)("img", {
                                    className: I.applicationIcon,
                                    alt: "",
                                    "aria-hidden": !0,
                                    src: o,
                                    width: 40,
                                    height: 40,
                                  }),
                                (0, i.jsxs)("div", {
                                  className: I.applicationRowContent,
                                  children: [
                                    (0, i.jsxs)("div", {
                                      className: I.applicationText,
                                      children: [
                                        (0, i.jsx)(s.Heading, {
                                          variant: "heading-md/medium",
                                          children: a.name,
                                        }),
                                        null != a.description &&
                                          (0, i.jsx)(s.Text, {
                                            variant: "text-sm/normal",
                                            color: "text-muted",
                                            lineClamp: 1,
                                            children: e,
                                          }),
                                      ],
                                    }),
                                    (0, i.jsx)(s.Button, {
                                      type: "button",
                                      innerClassName: I.applicationButtonHack,
                                      onClick: (e) => {
                                        e.stopPropagation(),
                                          (0, p.openOAuth2Modal)({
                                            clientId: a.id,
                                            scopes: [l.x.APPLICATIONS_COMMANDS],
                                            channelId: n,
                                            disableGuildSelect: !0,
                                            callback: k,
                                          });
                                      },
                                      size: s.Button.Sizes.SMALL,
                                      color: s.Button.Colors.PRIMARY,
                                      children: x.Z.Messages.ADD,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            { bot: c } = a;
                          return null != c
                            ? (0, i.jsx)(
                                s.ClickableContainer,
                                {
                                  onMouseDown: () => P(c),
                                  onKeyDown: (a) => w(a, c),
                                  className: I.applicationRow,
                                  onClick: () => {
                                    (0, u.openUserProfileModal)({
                                      channelId: n,
                                      userId: c.id,
                                      sourceAnalyticsLocations: M,
                                      analyticsLocation: {
                                        section:
                                          h.jXE
                                            .ADD_PRIVATE_CHANNEL_INTEGRATION_MODAL,
                                      },
                                    });
                                  },
                                  "aria-label":
                                    x.Z.Messages.PRIVATE_CHANNEL_INTEGRATION_ADD_MODAL_ROW_INFO.format(
                                      { appName: a.name },
                                    ),
                                  children: t,
                                },
                                a.id,
                              )
                            : (0, i.jsx)(
                                "div",
                                { className: I.applicationRow, children: t },
                                a.id,
                              );
                        })
                      : (0, i.jsx)(s.Spinner, {
                          className: I.spinner,
                          type: s.Spinner.Type.SPINNING_CIRCLE,
                        }),
                  }),
                ],
              }),
            }),
            (0, i.jsxs)(s.ModalFooter, {
              className: I.modalFooter,
              children: [
                (0, i.jsx)(s.Button, {
                  onClick: g,
                  children: x.Z.Messages.DONE,
                }),
                (0, i.jsx)(s.Button, {
                  look: s.Button.Looks.LINK,
                  onClick: g,
                  color: s.Button.Colors.PRIMARY,
                  children: x.Z.Messages.CANCEL,
                }),
              ],
            }),
          ],
        });
      }
    },
    516579: function (a, n, e) {
      a.exports = {
        modalHeader: "modalHeader_c3153d",
        headingContainer: "headingContainer_c3153d",
        modalContent: "modalContent_c3153d",
        modalFooter: "modalFooter_c3153d",
        spinner: "spinner_c3153d",
        modal: "modal_c3153d",
        image: "image_c3153d",
        applicationRowContainer: "applicationRowContainer_c3153d",
        applicationRow: "applicationRow_c3153d",
        applicationRowContent: "applicationRowContent_c3153d",
        applicationIcon: "applicationIcon_c3153d",
        applicationText: "applicationText_c3153d",
        applicationButtonHack: "applicationButtonHack_c3153d",
      };
    },
  },
]);
//# sourceMappingURL=d19a793b6e5edd52bb1e.js.map
