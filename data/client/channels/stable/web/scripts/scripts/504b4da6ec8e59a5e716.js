"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["47435"],
  {
    724531: function (e) {
      e.exports = "/assets/b52ee714b6c43243f58a.png";
    },
    99713: function (e) {
      e.exports = "/assets/19030c98f81270503f7a.png";
    },
    334202: function (e) {
      e.exports = "/assets/94c1c72dc5c451cc9aaf.png";
    },
    7234: function (e) {
      e.exports = "/assets/aaf70b716ebc0adb9130.png";
    },
    687555: function (e, s, r) {
      r(47120), r(653041);
      var t = r(735250),
        a = r(470079),
        i = r(120356),
        n = r.n(i),
        l = r(512722),
        C = r.n(l),
        o = r(597312),
        d = r(442837),
        c = r(481060),
        _ = r(232567),
        x = r(461745),
        p = r(434650),
        h = r(210887),
        f = r(51144),
        u = r(281494),
        R = r(276444),
        m = r(529840),
        E = r(689938),
        j = r(997103),
        L = r(724531),
        g = r(99713),
        S = r(334202),
        A = r(7234);
      function M(e) {
        let { numOfSelectedUsers: s } = e,
          r = (0, d.e7)([R.Z], () => R.Z.getReferralsRemaining());
        C()(null != r, "Referrals remaining should not be null");
        let a = r - s,
          i = E.Z.Messages.REFERRAL_PROGRAM_FRIEND_SELECT_HEADER.format({
            numReferrals: r,
          });
        return (
          a < r &&
            ((i = E.Z.Messages.REFERRAL_PROGRAM_SELECT_MORE_FRIEND.format({
              numFriends: a,
            })),
            1 === a &&
              (i = E.Z.Messages.REFERRAL_PROGRAM_SELECT_ONE_MORE_FRIEND),
            0 === a &&
              (i =
                E.Z.Messages.REFERRAL_PROGRAM_FRIEND_SELECTION_HIT_LIMIT.format(
                  { numReferrals: r },
                ))),
          (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsxs)("div", {
                className: j.title,
                children: [
                  (0, t.jsx)(Z, { className: j.titleImage }),
                  (0, t.jsx)(c.Heading, {
                    variant: "heading-xl/bold",
                    children: E.Z.Messages.REFERRAL_PROGRAM_SELECT_FRIENDS,
                  }),
                ],
              }),
              (0, t.jsx)(c.Text, {
                className: j.description,
                variant: "text-md/medium",
                color: "header-secondary",
                children: i,
              }),
            ],
          })
        );
      }
      function N() {
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsx)("div", {
              className: j.title,
              children: (0, t.jsx)(c.Heading, {
                variant: "heading-xl/bold",
                children:
                  E.Z.Messages
                    .REFERRAL_PROGRAM_SELECT_FRIENDS_NO_RESULTS_HEADER,
              }),
            }),
            (0, t.jsx)(c.Text, {
              className: j.description,
              variant: "text-md/medium",
              color: "header-secondary",
              children:
                E.Z.Messages
                  .REFERRAL_PROGRAM_SELCT_FRIENDS_NO_RESULTS_SUBHEADER,
            }),
          ],
        });
      }
      function F() {
        return (0, t.jsx)("div", {
          className: j.erroredContent,
          children: (0, t.jsx)(c.Image, { src: S, width: 225, height: 160 }),
        });
      }
      function v(e) {
        let { onClose: s } = e;
        return (0, t.jsxs)("div", {
          className: j.erroredContainer,
          children: [
            (0, t.jsxs)("div", {
              className: n()(j.erroredHeader, j.headerSeparator),
              children: [
                (0, t.jsx)("div", {
                  className: j.title,
                  children: (0, t.jsx)(c.Heading, {
                    variant: "heading-xl/bold",
                    children:
                      E.Z.Messages.REFERRAL_PROGRAM_FRIEND_SELECT_ERROR_HEADER,
                  }),
                }),
                (0, t.jsx)(c.Text, {
                  className: j.description,
                  variant: "text-md/medium",
                  color: "header-secondary",
                  children:
                    E.Z.Messages.REFERRAL_PROGRAM_FRIEND_SELECT_ERROR_SUBHEADER,
                }),
              ],
            }),
            (0, t.jsx)("div", {
              className: j.erroredContent,
              children: (0, t.jsx)(c.Image, {
                src: g,
                width: 178,
                height: 190,
              }),
            }),
            (0, t.jsx)("div", {
              className: n()(j.footer, j.footerSeparator),
              children: (0, t.jsx)(c.Button, {
                className: j.submit,
                onClick: () => s(),
                children: E.Z.Messages.REFERRAL_PROGRAM_CLOSE,
              }),
            }),
          ],
        });
      }
      function y(e) {
        let { onShare: s } = e,
          r = (0, d.e7)([R.Z], () => R.Z.getRecipientStatus()),
          [i, l] = a.useState([]),
          [C, o] = a.useState(new Set());
        return (
          a.useEffect(() => {
            (async () => {
              let e = [];
              for (let [s, t] of r)
                if (t === u.Fe.PENDING) {
                  let r = await (0, _.PR)(s);
                  e.push(r);
                }
              l(e);
            })();
          }, [r]),
          (0, t.jsxs)("div", {
            className: j.remindContainer,
            children: [
              (0, t.jsxs)("div", {
                className: n()(j.remindHeader, j.headerSeparator),
                children: [
                  (0, t.jsxs)("div", {
                    className: j.title,
                    children: [
                      (0, t.jsx)(Z, { className: j.titleImage }),
                      (0, t.jsx)(c.Heading, {
                        variant: "heading-xl/bold",
                        children: E.Z.Messages.REFERRAL_PROGRAM_REMIND_FRIENDS,
                      }),
                    ],
                  }),
                  (0, t.jsx)(c.Text, {
                    className: j.description,
                    variant: "text-md/medium",
                    color: "header-secondary",
                    children:
                      E.Z.Messages.REFERRAL_PROGRAM_FRIEND_SELECT_RESENT_HEADER,
                  }),
                ],
              }),
              (0, t.jsx)("div", {
                className: j.list,
                children: i.map((e) =>
                  (0, t.jsx)(
                    m.Z,
                    {
                      user: e,
                      checked: C.has(e),
                      onChange: (e, s) => {
                        o((r) => {
                          let t = new Set(r);
                          return s ? t.add(e) : t.delete(e), t;
                        });
                      },
                    },
                    e.id,
                  ),
                ),
              }),
              (0, t.jsx)("div", {
                className: n()(j.footer, j.footerSeparator),
                children: (0, t.jsx)(c.Button, {
                  className: j.submit,
                  onClick: () => s([...C.values()]),
                  children: E.Z.Messages.REFERRAL_PROGRAM_SHARE_TRIAL,
                }),
              }),
            ],
          })
        );
      }
      function Z(e) {
        let { className: s } = e;
        return "light" === (0, d.e7)([h.Z], () => h.Z.theme)
          ? (0, t.jsx)(c.Image, { className: s, src: L, width: 55, height: 38 })
          : (0, t.jsx)(c.Image, {
              className: s,
              src: A,
              width: 55,
              height: 38,
            });
      }
      s.Z = function (e) {
        let { onClose: s, onShare: r } = e,
          i = (0, d.e7)([R.Z], () => R.Z.getReferralsRemaining()),
          l = (0, d.e7)([R.Z], () => R.Z.getRecipientStatus()),
          [h, L] = a.useState(0),
          [g, S] = a.useState(""),
          [A, Z] = a.useState([]),
          [O, I] = a.useState(!1),
          [w, U] = a.useState(!1),
          G = (function (e, s) {
            let [r, t] = a.useState(e);
            return (
              a.useEffect(() => {
                let r = setTimeout(() => {
                  t(e);
                }, s);
                return () => {
                  clearTimeout(r);
                };
              }, [e, s]),
              r
            );
          })(g, 400),
          [B, D] = a.useState(new Map()),
          [T, P] = a.useState(new Map());
        a.useEffect(() => {
          b(0);
        }, [G]),
          C()(null != i, "Referrals remaining should not be null");
        let b = async (e) => {
            try {
              if (null == e) return;
              I(!0);
              let s = [...T.values()];
              for (let [e, r] of l)
                if (r === u.Fe.PENDING && !T.has(e)) {
                  let r = await (0, _.PR)(e);
                  s.push(r);
                }
              let r = await (0, u.iF)(e, G);
              Z((t) => {
                let a = r.users.filter((e) => !B.has(e.id));
                return ((s = s.filter((e) => !B.has(e.id))), 0 === e)
                  ? [...B.values(), ...s.values(), ...a]
                  : [...t, ...a];
              }),
                P((e) => {
                  let r = new Map(e);
                  for (let e of s) r.set(e.id, e);
                  return r;
                }),
                L(r.nextIndex);
            } catch (e) {
              U(!0);
            } finally {
              I(!1);
            }
          },
          k = (0, p.O)((e) => {
            e && !O && b(h);
          });
        if (w) return (0, t.jsx)(v, { onClose: s });
        if (0 === i) return (0, t.jsx)(y, { onShare: r });
        let H = G.length > 0 && 0 === A.length;
        return (0, t.jsxs)("div", {
          children: [
            (0, t.jsxs)("div", {
              className: n()(j.header, j.headerSeparator),
              children: [
                H
                  ? (0, t.jsx)(N, {})
                  : (0, t.jsx)(M, { numOfSelectedUsers: B.size }),
                (0, t.jsx)(x.ZP, {
                  className: j.searchbar,
                  size: x.ZP.Sizes.MEDIUM,
                  tags: [...B.values()].map((e) => f.ZP.getName(e)),
                  placeholder: E.Z.Messages.REFERRAL_PROGRAM_SEARCH_FRIENDS,
                  query: g,
                  onRemoveTag: (e) => {
                    D((s) => {
                      let r = [...s.values()][e],
                        t = new Map(s);
                      return t.delete(r.id), t;
                    });
                  },
                  onQueryChange: S,
                  onClear: () => S(""),
                }),
              ],
            }),
            H
              ? (0, t.jsx)(F, {})
              : (0, t.jsxs)(o.w0, {
                  className: j.list,
                  children: [
                    A.map((e) =>
                      (0, t.jsx)(
                        m.Z,
                        {
                          disabled:
                            [...B.values()].filter((e) => !T.has(e.id))
                              .length >= i &&
                            !B.has(e.id) &&
                            !T.has(e.id),
                          checked: B.has(e.id),
                          user: e,
                          onChange: (e, s) => {
                            D((r) => {
                              let t = new Map(r);
                              return s ? t.set(e.id, e) : t.delete(e.id), t;
                            });
                          },
                        },
                        e.id,
                      ),
                    ),
                    O && (0, t.jsx)(c.Spinner, {}),
                    (0, t.jsx)("div", { ref: k }),
                  ],
                }),
            (0, t.jsx)("div", {
              className: n()(j.footer, j.footerSeparator),
              children: (0, t.jsx)(c.Button, {
                className: j.submit,
                disabled: 0 === B.size && !H,
                onClick: () => {
                  if (H) {
                    s();
                    return;
                  }
                  r([...B.values()]);
                },
                children: H
                  ? E.Z.Messages.REFERRAL_PROGRAM_CLOSE
                  : E.Z.Messages.REFERRAL_PROGRAM_SHARE_TRIAL,
              }),
            }),
          ],
        });
      };
    },
    204387: function (e, s, r) {
      r.r(s),
        r.d(s, {
          Steps: function () {
            return t;
          },
        }),
        r(47120);
      var t,
        a,
        i = r(735250),
        n = r(470079),
        l = r(481060),
        C = r(100527),
        o = r(906732),
        d = r(626135),
        c = r(281494),
        _ = r(687555),
        x = r(596583),
        p = r(981631);
      ((a = t || (t = {}))[(a.SELECT_FRIENDS = 1)] = "SELECT_FRIENDS"),
        (a[(a.CONFIRMATION = 2)] = "CONFIRMATION");
      s.default = (e) => {
        let s,
          { transitionState: r, onClose: t, sourceAnalyticsLocations: a } = e,
          [h, f] = n.useState(1),
          [u, R] = n.useState(new Set()),
          [m, E] = n.useState(new Map()),
          { analyticsLocations: j } = (0, o.ZP)([
            ...a,
            C.Z.PREMIUM_MARKETING_REFERALL_PROGRAM_SHARE_MODAL,
          ]);
        switch (h) {
          case 1:
            s = (0, i.jsx)(_.Z, {
              onShare: async (e) => {
                try {
                  d.default.track(p.rMx.REFERRAL_PROGRAM_SHARE_CTA_CLICKED, {
                    location_stack: j,
                  });
                  let s = await (0, c.jy)(e.map((e) => e.id));
                  f(2), R(new Set(e)), E(s);
                } catch {}
              },
              onClose: t,
            });
            break;
          case 2:
            s = (0, i.jsx)(x.Z, {
              selectedUsers: u,
              trialCreationResult: m,
              onClose: t,
            });
            break;
          default:
            t();
        }
        return (0, i.jsx)(l.ModalRoot, { transitionState: r, children: s });
      };
    },
    529840: function (e, s, r) {
      r.d(s, {
        Z: function () {
          return o;
        },
      });
      var t = r(735250);
      r(470079);
      var a = r(120356),
        i = r.n(a),
        n = r(481060),
        l = r(518950),
        C = r(67871);
      function o(e) {
        var s;
        let { user: r, checked: a, onChange: o, disabled: d } = e,
          { avatarSrc: c, eventHandlers: _ } = (0, l.Z)({
            user: r,
            size: n.AvatarSizes.SIZE_32,
          }),
          x = null !== (s = r.globalName) && void 0 !== s ? s : r.username;
        return (0, t.jsxs)("div", {
          className: C.container,
          children: [
            (0, t.jsxs)("div", {
              className: C.user,
              children: [
                (0, t.jsx)(n.Avatar, {
                  className: i()({ [C.muted]: d }),
                  src: c,
                  "aria-label": x,
                  size: n.AvatarSizes.SIZE_32,
                  ..._,
                }),
                (0, t.jsx)(n.Text, {
                  color: d ? "text-muted" : "text-normal",
                  variant: "text-md/semibold",
                  children: x,
                }),
              ],
            }),
            (0, t.jsx)("div", {
              className: C.checkbox,
              children: (0, t.jsx)(n.Checkbox, {
                disabled: d,
                value: a,
                onChange: (e, s) => o(r, s),
              }),
            }),
          ],
        });
      }
    },
    596583: function (e, s, r) {
      r(47120);
      var t = r(735250);
      r(470079);
      var a = r(120356),
        i = r.n(a),
        n = r(512722),
        l = r.n(n),
        C = r(442837),
        o = r(780384),
        d = r(481060),
        c = r(493683),
        _ = r(37234),
        x = r(410030),
        p = r(518950),
        h = r(819640),
        f = r(63063),
        u = r(51144),
        R = r(281494),
        m = r(276444),
        E = r(792451),
        j = r(814667),
        L = r(981631),
        g = r(689938),
        S = r(819347);
      let A = (e, s) => {
          h.Z.hasLayers() && (0, _.xf)(), c.Z.openPrivateChannel(e), s();
        },
        M = (e) => {
          let { user: s, trialCreationResult: r, onClose: a } = e,
            { avatarSrc: n, eventHandlers: l } = (0, p.Z)({
              user: s,
              size: d.AvatarSizes.SIZE_56,
            }),
            C = u.ZP.getName(s),
            o = s.username !== C && r === R.Fz.SUCCESS,
            c = r === R.Fz.FAIL;
          return (0, t.jsxs)("div", {
            className: S.referredUserRowContainer,
            children: [
              (0, t.jsx)(d.Avatar, {
                imageClassName: i()({ [S.erroredAvatar]: c }),
                src: n,
                "aria-label": C,
                size: d.AvatarSizes.SIZE_56,
                ...l,
              }),
              (0, t.jsxs)("div", {
                className: S.referredUserRowBody,
                children: [
                  c
                    ? (0, t.jsxs)(t.Fragment, {
                        children: [
                          (0, t.jsx)(d.Text, {
                            className: S.errorDisplayName,
                            variant: "text-md/medium",
                            children: C,
                          }),
                          (0, t.jsx)(d.Text, {
                            variant: "text-md/medium",
                            className: S.userName,
                            children:
                              g.Z.Messages.REFERRAL_PROGRAM_CONFIRMATION_ERROR_PAGE.format(
                                { userName: C },
                              ),
                          }),
                        ],
                      })
                    : (0, t.jsx)(d.Tooltip, {
                        text: g.Z.Messages
                          .REFERRAL_PROGRAM_FRIEND_SELECT_COMPLETE_TOOL_TOP,
                        position: "right",
                        children: (e) => {
                          let { onMouseEnter: r, onMouseLeave: i } = e;
                          return (0, t.jsx)(d.Clickable, {
                            onClick: () => A(s.id, a),
                            className: S.displayNameClickableContainer,
                            onMouseEnter: r,
                            onMouseLeave: i,
                            children: (0, t.jsx)(d.Text, {
                              variant: "text-md/medium",
                              className: S.displayName,
                              children: C,
                            }),
                          });
                        },
                      }),
                  o &&
                    (0, t.jsx)(d.Text, {
                      variant: "text-md/medium",
                      className: S.userName,
                      children: s.username,
                    }),
                ],
              }),
            ],
          });
        };
      s.Z = (e) => {
        let { selectedUsers: s, trialCreationResult: r, onClose: a } = e,
          i = [...s].map((e) =>
            (0, t.jsx)(
              M,
              { user: e, trialCreationResult: r.get(e.id), onClose: a },
              e.id,
            ),
          ),
          n = (0, C.e7)([m.Z], () => m.Z.getReferralsRemaining());
        l()(null !== n, "Referrals remaining should not be null");
        let c = (0, x.Fg)(),
          _ = (0, o.ap)(c) ? j.Z : E.Z,
          p =
            g.Z.Messages.REFERRAL_PROGRAM_FRIEND_SELECT_RESENT_COMPLETE_HEADER,
          h = [...r.values()].filter((e) => e === R.Fz.SUCCESS).length;
        return (
          n > 0 &&
            (p =
              g.Z.Messages.REFERRAL_PROGRAM_FRIEND_SELECT_COMPLETE_HEADER.format(
                { numReferrals: h },
              )),
          0 === h &&
            (p = g.Z.Messages.REFERRAL_PROGRAM_CONFIRMATION_ERROR_PAGE_HEADER),
          (0, t.jsxs)("div", {
            className: S.confrimationContainer,
            children: [
              (0, t.jsx)(d.Clickable, {
                onClick: a,
                className: S.closeButtonContainer,
                children: (0, t.jsx)(d.XSmallIcon, {
                  size: "custom",
                  width: 20,
                  height: 20,
                }),
              }),
              (0, t.jsx)(_, { className: S.headerIcon }),
              (0, t.jsx)(d.Heading, {
                variant: "heading-lg/bold",
                className: S.heading,
                children: p,
              }),
              (0, t.jsx)("div", {
                className: S.confirmedUserContainer,
                children: i,
              }),
              (0, t.jsx)(d.Text, {
                variant: "text-md/medium",
                children:
                  g.Z.Messages.REFERRAL_PROGRAM_FRIEND_SELECT_COMPLETE_SUBHEADER.format(
                    {
                      days: 10,
                      helpdeskArticle: f.Z.getArticleURL(
                        L.BhN.REFERRAL_PROGRAM,
                      ),
                    },
                  ),
              }),
            ],
          })
        );
      };
    },
    792451: function (e, s, r) {
      var t = r(735250);
      r(470079);
      s.Z = (e) => {
        let { className: s, width: r = 214, height: a = 165 } = e;
        return (0, t.jsxs)("svg", {
          width: r,
          height: a,
          viewBox: "0 0 214 165",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          className: s,
          children: [
            (0, t.jsx)("g", {
              filter: "url(#filter0_f_1493_12621)",
              children: (0, t.jsx)("path", {
                d: "M170.4 76.7202C170.4 116.242 138.362 148.28 98.84 148.28C59.3184 148.28 27.2798 116.242 27.2798 76.7202C27.2798 37.1987 59.3184 5.1601 98.84 5.1601C138.362 5.1601 170.4 37.1987 170.4 76.7202Z",
                stroke: "url(#paint0_linear_1493_12621)",
                strokeWidth: "5",
              }),
            }),
            (0, t.jsx)("ellipse", {
              cx: "97.97",
              cy: "75.4052",
              rx: "59.136",
              ry: "59.136",
              fill: "#4F5053",
            }),
            (0, t.jsx)("path", {
              d: "M169.901 76.0602C169.901 115.306 138.086 147.12 98.8404 147.12C59.595 147.12 27.7803 115.306 27.7803 76.0602C27.7803 36.8147 59.595 5 98.8404 5C138.086 5 169.901 36.8147 169.901 76.0602Z",
              stroke: "url(#paint1_linear_1493_12621)",
              strokeWidth: "6",
            }),
            (0, t.jsx)("path", {
              d: "M115.302 49.9599L106.094 53.1967C105.62 53.3586 105.209 53.664 104.918 54.0702C104.627 54.4765 104.47 54.9632 104.47 55.4625C104.47 55.9617 104.627 56.4484 104.918 56.8547C105.209 57.2609 105.62 57.5663 106.094 57.7282L115.302 60.965C115.644 61.0828 115.955 61.2765 116.211 61.5317C116.467 61.7868 116.661 62.0967 116.779 62.4378L120.027 71.6142C120.19 72.0864 120.496 72.4962 120.904 72.7864C121.311 73.0766 121.8 73.2326 122.301 73.2326C122.802 73.2326 123.29 73.0766 123.698 72.7864C124.105 72.4962 124.412 72.0864 124.574 71.6142L127.822 62.4378C127.942 62.0978 128.137 61.7891 128.393 61.5342C128.649 61.2793 128.959 61.0848 129.3 60.965L138.524 57.7282C138.998 57.5663 139.409 57.2609 139.7 56.8547C139.991 56.4484 140.148 55.9617 140.148 55.4625C140.148 54.9632 139.991 54.4765 139.7 54.0702C139.409 53.664 138.998 53.3586 138.524 53.1967L129.3 49.9599C128.96 49.837 128.652 49.6415 128.397 49.387C128.142 49.1326 127.945 48.8254 127.822 48.4871L124.574 39.2946C124.412 38.8223 124.105 38.4125 123.698 38.1223C123.29 37.8321 122.802 37.6761 122.301 37.6761C121.8 37.6761 121.311 37.8321 120.904 38.1223C120.496 38.4125 120.19 38.8223 120.027 39.2946L116.779 48.4871C116.659 48.8271 116.464 49.1358 116.208 49.3907C115.953 49.6456 115.643 49.8401 115.302 49.9599Z",
              fill: "white",
              fillOpacity: "0.4",
            }),
            (0, t.jsx)("g", {
              clipPath: "url(#clip0_1493_12621)",
              children: (0, t.jsxs)("g", {
                filter: "url(#filter1_d_1493_12621)",
                children: [
                  (0, t.jsx)("path", {
                    d: "M100.247 89.058C104.135 89.058 107.286 85.9064 107.286 82.0188C107.286 78.1311 104.135 74.9796 100.247 74.9796C96.3594 74.9796 93.2079 78.1311 93.2079 82.0188C93.2079 85.9064 96.3594 89.058 100.247 89.058Z",
                    fill: "url(#paint2_linear_1493_12621)",
                  }),
                  (0, t.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M72.0903 53.8619C70.1464 53.8619 68.5707 55.4377 68.5707 57.3815C68.5707 59.3254 70.1464 60.9011 72.0903 60.9011H82.6491C84.5929 60.9011 86.1687 62.4769 86.1687 64.4207C86.1687 66.3646 84.5929 67.9403 82.6491 67.9403L66.8109 67.9404C64.867 67.9404 63.2913 69.5161 63.2913 71.46C63.2913 73.4038 64.867 74.9796 66.8109 74.9796L75.6099 74.9796C77.5537 74.9796 79.1295 76.5553 79.1295 78.4992C79.1295 80.443 77.5537 82.0188 75.6099 82.0188H68.5707C66.6268 82.0188 65.0511 83.5945 65.0511 85.5384C65.0511 87.4822 66.6268 89.058 68.5707 89.058H72.9773C76.103 101.202 87.1271 110.176 100.247 110.176C115.798 110.176 128.404 97.5693 128.404 82.0188C128.404 66.4682 115.798 53.8619 100.247 53.8619H72.0903ZM100.247 96.0972C108.022 96.0972 114.325 89.794 114.325 82.0188C114.325 74.2435 108.022 67.9403 100.247 67.9403C92.4718 67.9403 86.1687 74.2435 86.1687 82.0188C86.1687 89.794 92.4718 96.0972 100.247 96.0972Z",
                    fill: "url(#paint3_linear_1493_12621)",
                  }),
                  (0, t.jsx)("path", {
                    d: "M56.2521 74.9796C58.1959 74.9796 59.7717 73.4038 59.7717 71.46C59.7717 69.5161 58.1959 67.9403 56.2521 67.9403H54.4923C52.5484 67.9403 50.9727 69.5161 50.9727 71.46C50.9727 73.4038 52.5484 74.9796 54.4923 74.9796H56.2521Z",
                    fill: "url(#paint4_linear_1493_12621)",
                  }),
                ],
              }),
            }),
            (0, t.jsx)("path", {
              d: "M82.5163 101.184L80.5514 95.6655C80.4566 95.3818 80.2747 95.1349 80.0313 94.96C79.7879 94.7851 79.4955 94.6909 79.1954 94.6909C78.8953 94.6909 78.6029 94.7851 78.3595 94.96C78.1161 95.1349 77.9342 95.3818 77.8394 95.6655L76.0206 101.184C75.9497 101.386 75.8341 101.57 75.6823 101.721C75.5305 101.872 75.3464 101.988 75.1437 102.058L69.525 103.887C69.246 103.985 69.0044 104.167 68.8335 104.407C68.6626 104.648 68.5708 104.936 68.5708 105.23C68.5708 105.525 68.6626 105.813 68.8335 106.053C69.0044 106.294 69.246 106.476 69.525 106.574L74.9976 108.483C75.2002 108.554 75.3843 108.669 75.5361 108.821C75.6879 108.972 75.8036 109.155 75.8745 109.357L77.7745 114.795C77.8692 115.079 78.0512 115.326 78.2945 115.501C78.5379 115.676 78.8304 115.77 79.1304 115.77C79.4305 115.77 79.723 115.676 79.9663 115.501C80.2097 115.326 80.3917 115.079 80.4864 114.795L82.5163 109.357C82.5872 109.155 82.7029 108.972 82.8547 108.821C83.0065 108.669 83.1906 108.554 83.3932 108.483L88.8658 106.574C89.1448 106.476 89.3864 106.294 89.5573 106.053C89.7282 105.813 89.82 105.525 89.82 105.23C89.82 104.936 89.7282 104.648 89.5573 104.407C89.3864 104.167 89.1448 103.985 88.8658 103.887L83.3282 101.977C83.1457 101.908 82.9794 101.801 82.8397 101.665C82.7001 101.528 82.59 101.365 82.5163 101.184Z",
              fill: "white",
              fillOpacity: "0.8",
            }),
            (0, t.jsx)("path", {
              d: "M106.452 37.3258L105.28 34.035C105.224 33.8658 105.115 33.7186 104.97 33.6143C104.825 33.51 104.65 33.4539 104.472 33.4539C104.293 33.4539 104.118 33.51 103.973 33.6143C103.828 33.7186 103.719 33.8658 103.663 34.035L102.578 37.3258C102.536 37.4462 102.467 37.5556 102.377 37.6458C102.286 37.736 102.176 37.8047 102.056 37.8469L98.7052 38.9374C98.5389 38.9958 98.3948 39.1042 98.2929 39.2476C98.191 39.3911 98.1362 39.5626 98.1362 39.7383C98.1362 39.9141 98.191 40.0856 98.2929 40.229C98.3948 40.3725 98.5389 40.4809 98.7052 40.5393L101.968 41.6781C102.089 41.7202 102.199 41.7889 102.29 41.8791C102.38 41.9694 102.449 42.0787 102.491 42.1992L103.624 45.4417C103.681 45.6109 103.789 45.7581 103.934 45.8624C104.079 45.9667 104.254 46.0228 104.433 46.0228C104.612 46.0228 104.786 45.9667 104.931 45.8624C105.076 45.7581 105.185 45.6109 105.241 45.4417L106.452 42.1992C106.494 42.0787 106.563 41.9694 106.653 41.8791C106.744 41.7889 106.854 41.7202 106.975 41.6781L110.238 40.5393C110.404 40.4809 110.548 40.3725 110.65 40.229C110.752 40.0856 110.807 39.9141 110.807 39.7383C110.807 39.5626 110.752 39.3911 110.65 39.2476C110.548 39.1042 110.404 38.9958 110.238 38.9374L106.936 37.7986C106.827 37.757 106.728 37.6936 106.645 37.6122C106.561 37.5309 106.496 37.4334 106.452 37.3258Z",
              fill: "white",
              fillOpacity: "0.8",
            }),
            (0, t.jsx)("path", {
              d: "M194.876 25.4452L187.862 27.9109C187.501 28.0343 187.188 28.2669 186.966 28.5764C186.744 28.8859 186.625 29.2567 186.625 29.637C186.625 30.0173 186.744 30.3881 186.966 30.6975C187.188 31.007 187.501 31.2397 187.862 31.363L194.876 33.8288C195.137 33.9185 195.374 34.0661 195.569 34.2605C195.764 34.4548 195.912 34.6909 196.002 34.9507L198.476 41.9412C198.6 42.301 198.833 42.6132 199.144 42.8342C199.455 43.0553 199.827 43.1741 200.208 43.1741C200.59 43.1741 200.962 43.0553 201.272 42.8342C201.583 42.6132 201.816 42.301 201.94 41.9412L204.414 34.9507C204.506 34.6918 204.654 34.4566 204.849 34.2624C205.044 34.0682 205.28 33.9201 205.54 33.8288L212.567 31.363C212.928 31.2397 213.241 31.007 213.463 30.6975C213.684 30.3881 213.804 30.0173 213.804 29.637C213.804 29.2567 213.684 28.8859 213.463 28.5764C213.241 28.2669 212.928 28.0343 212.567 27.9109L205.54 25.4452C205.281 25.3516 205.047 25.2026 204.852 25.0088C204.658 24.8149 204.508 24.5809 204.414 24.3232L201.94 17.3204C201.816 16.9607 201.583 16.6484 201.272 16.4274C200.962 16.2064 200.59 16.0875 200.208 16.0875C199.827 16.0875 199.455 16.2064 199.144 16.4274C198.833 16.6484 198.6 16.9607 198.476 17.3204L196.002 24.3232C195.911 24.5822 195.762 24.8174 195.567 25.0116C195.372 25.2057 195.136 25.3539 194.876 25.4452Z",
              fill: "white",
              fillOpacity: "0.4",
            }),
            (0, t.jsx)("path", {
              d: "M10.8198 107.861L9.32298 103.657C9.25082 103.441 9.11221 103.253 8.9268 103.12C8.7414 102.986 8.51861 102.915 8.29002 102.915C8.06142 102.915 7.83863 102.986 7.65323 103.12C7.46783 103.253 7.32922 103.441 7.25705 103.657L5.87152 107.861C5.81751 108.015 5.7294 108.155 5.61375 108.27C5.4981 108.385 5.35787 108.473 5.2035 108.527L0.923194 109.92C0.710665 109.995 0.526607 110.133 0.396409 110.317C0.266211 110.5 0.196289 110.719 0.196289 110.943C0.196289 111.168 0.266211 111.387 0.396409 111.57C0.526607 111.754 0.710665 111.892 0.923194 111.967L5.09216 113.422C5.24654 113.475 5.38676 113.563 5.50241 113.678C5.61806 113.794 5.70617 113.933 5.76018 114.087L7.20757 118.23C7.27973 118.446 7.41834 118.634 7.60375 118.767C7.78915 118.901 8.01194 118.972 8.24053 118.972C8.46912 118.972 8.69191 118.901 8.87732 118.767C9.06272 118.634 9.20133 118.446 9.2735 118.23L10.8198 114.087C10.8739 113.933 10.962 113.794 11.0776 113.678C11.1933 113.563 11.3335 113.475 11.4879 113.422L15.6568 111.967C15.8694 111.892 16.0534 111.754 16.1836 111.57C16.3138 111.387 16.3837 111.168 16.3837 110.943C16.3837 110.719 16.3138 110.5 16.1836 110.317C16.0534 110.133 15.8694 109.995 15.6568 109.92L11.4384 108.465C11.2993 108.412 11.1726 108.331 11.0662 108.227C10.9599 108.123 10.876 107.999 10.8198 107.861Z",
              fill: "white",
              fillOpacity: "0.8",
            }),
            (0, t.jsx)("path", {
              d: "M17.5983 132.255L16.7058 129.748C16.6628 129.62 16.5801 129.507 16.4695 129.428C16.359 129.348 16.2261 129.306 16.0898 129.306C15.9535 129.306 15.8207 129.348 15.7101 129.428C15.5996 129.507 15.5169 129.62 15.4739 129.748L14.6477 132.255C14.6155 132.347 14.563 132.43 14.494 132.499C14.4251 132.568 14.3414 132.62 14.2494 132.652L11.6971 133.483C11.5704 133.528 11.4606 133.61 11.383 133.719C11.3054 133.829 11.2637 133.959 11.2637 134.093C11.2637 134.227 11.3054 134.358 11.383 134.467C11.4606 134.576 11.5704 134.659 11.6971 134.703L14.183 135.571C14.2751 135.603 14.3587 135.655 14.4276 135.724C14.4966 135.793 14.5491 135.876 14.5813 135.968L15.4444 138.438C15.4874 138.567 15.5701 138.679 15.6806 138.758C15.7912 138.838 15.924 138.881 16.0603 138.881C16.1966 138.881 16.3295 138.838 16.44 138.758C16.5506 138.679 16.6332 138.567 16.6763 138.438L17.5983 135.968C17.6305 135.876 17.6831 135.793 17.752 135.724C17.821 135.655 17.9046 135.603 17.9967 135.571L20.4826 134.703C20.6093 134.659 20.719 134.576 20.7967 134.467C20.8743 134.358 20.916 134.227 20.916 134.093C20.916 133.959 20.8743 133.829 20.7967 133.719C20.719 133.61 20.6093 133.528 20.4826 133.483L17.9672 132.616C17.8842 132.584 17.8087 132.536 17.7453 132.474C17.6818 132.412 17.6318 132.337 17.5983 132.255Z",
              fill: "white",
              fillOpacity: "0.4",
            }),
            (0, t.jsx)("path", {
              d: "M178.488 9.67284L177.595 7.16597C177.552 7.03708 177.469 6.92495 177.359 6.84549C177.248 6.76603 177.115 6.72327 176.979 6.72327C176.843 6.72327 176.71 6.76603 176.599 6.84549C176.489 6.92495 176.406 7.03708 176.363 7.16597L175.537 9.67284C175.505 9.76459 175.452 9.84792 175.383 9.91664C175.314 9.98537 175.231 10.0377 175.139 10.0698L172.586 10.9005C172.46 10.945 172.35 11.0276 172.272 11.1369C172.195 11.2462 172.153 11.3768 172.153 11.5107C172.153 11.6446 172.195 11.7752 172.272 11.8845C172.35 11.9938 172.46 12.0764 172.586 12.1209L175.072 12.9884C175.164 13.0205 175.248 13.0728 175.317 13.1416C175.386 13.2103 175.438 13.2936 175.47 13.3854L176.334 15.8555C176.377 15.9844 176.459 16.0965 176.57 16.176C176.68 16.2554 176.813 16.2982 176.949 16.2982C177.086 16.2982 177.219 16.2554 177.329 16.176C177.44 16.0965 177.522 15.9844 177.565 15.8555L178.488 13.3854C178.52 13.2936 178.572 13.2103 178.641 13.1416C178.71 13.0728 178.794 13.0205 178.886 12.9884L181.372 12.1209C181.498 12.0764 181.608 11.9938 181.686 11.8845C181.763 11.7752 181.805 11.6446 181.805 11.5107C181.805 11.3768 181.763 11.2462 181.686 11.1369C181.608 11.0276 181.498 10.945 181.372 10.9005L178.856 10.0331C178.773 10.0014 178.698 9.95304 178.634 9.89108C178.571 9.82912 178.521 9.75484 178.488 9.67284Z",
              fill: "white",
              fillOpacity: "0.8",
            }),
            (0, t.jsxs)("defs", {
              children: [
                (0, t.jsxs)("filter", {
                  id: "filter0_f_1493_12621",
                  x: "10.7798",
                  y: "-11.3399",
                  width: "176.12",
                  height: "176.12",
                  filterUnits: "userSpaceOnUse",
                  colorInterpolationFilters: "sRGB",
                  children: [
                    (0, t.jsx)("feFlood", {
                      floodOpacity: "0",
                      result: "BackgroundImageFix",
                    }),
                    (0, t.jsx)("feBlend", {
                      mode: "normal",
                      in: "SourceGraphic",
                      in2: "BackgroundImageFix",
                      result: "shape",
                    }),
                    (0, t.jsx)("feGaussianBlur", {
                      stdDeviation: "7",
                      result: "effect1_foregroundBlur_1493_12621",
                    }),
                  ],
                }),
                (0, t.jsxs)("filter", {
                  id: "filter1_d_1493_12621",
                  x: "40.9727",
                  y: "47.8619",
                  width: "97.4312",
                  height: "76.3137",
                  filterUnits: "userSpaceOnUse",
                  colorInterpolationFilters: "sRGB",
                  children: [
                    (0, t.jsx)("feFlood", {
                      floodOpacity: "0",
                      result: "BackgroundImageFix",
                    }),
                    (0, t.jsx)("feColorMatrix", {
                      in: "SourceAlpha",
                      type: "matrix",
                      values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                      result: "hardAlpha",
                    }),
                    (0, t.jsx)("feOffset", { dy: "4" }),
                    (0, t.jsx)("feGaussianBlur", { stdDeviation: "5" }),
                    (0, t.jsx)("feComposite", {
                      in2: "hardAlpha",
                      operator: "out",
                    }),
                    (0, t.jsx)("feColorMatrix", {
                      type: "matrix",
                      values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0",
                    }),
                    (0, t.jsx)("feBlend", {
                      mode: "normal",
                      in2: "BackgroundImageFix",
                      result: "effect1_dropShadow_1493_12621",
                    }),
                    (0, t.jsx)("feBlend", {
                      mode: "normal",
                      in: "SourceGraphic",
                      in2: "effect1_dropShadow_1493_12621",
                      result: "shape",
                    }),
                  ],
                }),
                (0, t.jsxs)("linearGradient", {
                  id: "paint0_linear_1493_12621",
                  x1: "98.84",
                  y1: "2.6601",
                  x2: "98.84",
                  y2: "150.78",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, t.jsx)("stop", { stopColor: "#FFBDF2" }),
                    (0, t.jsx)("stop", { offset: "1", stopColor: "#E742E1" }),
                  ],
                }),
                (0, t.jsxs)("linearGradient", {
                  id: "paint1_linear_1493_12621",
                  x1: "98.8404",
                  y1: "2",
                  x2: "98.8404",
                  y2: "150.12",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, t.jsx)("stop", { stopColor: "#FFBDF2" }),
                    (0, t.jsx)("stop", { offset: "1", stopColor: "#E742E1" }),
                  ],
                }),
                (0, t.jsxs)("linearGradient", {
                  id: "paint2_linear_1493_12621",
                  x1: "50.9727",
                  y1: "82.0188",
                  x2: "128.404",
                  y2: "82.0188",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, t.jsx)("stop", { stopColor: "#B473F5" }),
                    (0, t.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                  ],
                }),
                (0, t.jsxs)("linearGradient", {
                  id: "paint3_linear_1493_12621",
                  x1: "50.9727",
                  y1: "82.0188",
                  x2: "128.404",
                  y2: "82.0188",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, t.jsx)("stop", { stopColor: "#B473F5" }),
                    (0, t.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                  ],
                }),
                (0, t.jsxs)("linearGradient", {
                  id: "paint4_linear_1493_12621",
                  x1: "50.9727",
                  y1: "82.0188",
                  x2: "128.404",
                  y2: "82.0188",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, t.jsx)("stop", { stopColor: "#B473F5" }),
                    (0, t.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                  ],
                }),
                (0, t.jsx)("clipPath", {
                  id: "clip0_1493_12621",
                  children: (0, t.jsx)("rect", {
                    width: "84.4704",
                    height: "84.4705",
                    fill: "white",
                    transform: "translate(47.4531 39.7836)",
                  }),
                }),
              ],
            }),
          ],
        });
      };
    },
    814667: function (e, s, r) {
      var t = r(735250);
      r(470079);
      s.Z = (e) => {
        let { className: s, width: r = 214, height: a = 165 } = e;
        return (0, t.jsxs)("svg", {
          className: s,
          width: r,
          height: a,
          viewBox: "0 0 214 165",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [
            (0, t.jsx)("g", {
              filter: "url(#filter0_f_1926_8318)",
              children: (0, t.jsx)("path", {
                d: "M170.4 76.7203C170.4 116.242 138.362 148.28 98.8401 148.28C59.3185 148.28 27.2799 116.242 27.2799 76.7203C27.2799 37.1987 59.3185 5.16016 98.8401 5.16016C138.362 5.16016 170.4 37.1987 170.4 76.7203Z",
                stroke: "url(#paint0_linear_1926_8318)",
                "stroke-width": "5",
              }),
            }),
            (0, t.jsx)("ellipse", {
              cx: "97.9699",
              cy: "75.405",
              rx: "59.136",
              ry: "59.136",
              fill: "url(#paint1_linear_1926_8318)",
            }),
            (0, t.jsx)("path", {
              d: "M169.901 76.0602C169.901 115.306 138.086 147.12 98.8408 147.12C59.5954 147.12 27.7806 115.306 27.7806 76.0602C27.7806 36.8147 59.5954 5 98.8408 5C138.086 5 169.901 36.8147 169.901 76.0602Z",
              stroke: "url(#paint2_linear_1926_8318)",
              "stroke-width": "6",
            }),
            (0, t.jsx)("path", {
              d: "M115.301 49.96L106.094 53.1968C105.62 53.3587 105.209 53.6641 104.918 54.0704C104.626 54.4766 104.47 54.9633 104.47 55.4626C104.47 55.9618 104.626 56.4485 104.918 56.8548C105.209 57.261 105.62 57.5664 106.094 57.7283L115.301 60.9652C115.644 61.0829 115.955 61.2767 116.211 61.5318C116.467 61.787 116.661 62.0968 116.779 62.4379L120.027 71.6143C120.19 72.0865 120.496 72.4964 120.904 72.7865C121.311 73.0767 121.8 73.2327 122.301 73.2327C122.801 73.2327 123.29 73.0767 123.697 72.7865C124.105 72.4964 124.412 72.0865 124.574 71.6143L127.822 62.4379C127.942 62.098 128.137 61.7892 128.393 61.5343C128.649 61.2795 128.959 61.085 129.3 60.9652L138.523 57.7283C138.997 57.5664 139.409 57.261 139.7 56.8548C139.991 56.4485 140.147 55.9618 140.147 55.4626C140.147 54.9633 139.991 54.4766 139.7 54.0704C139.409 53.6641 138.997 53.3587 138.523 53.1968L129.3 49.96C128.96 49.8372 128.652 49.6416 128.397 49.3872C128.141 49.1327 127.945 48.8255 127.822 48.4872L124.574 39.2947C124.412 38.8224 124.105 38.4126 123.697 38.1224C123.29 37.8323 122.801 37.6763 122.301 37.6763C121.8 37.6763 121.311 37.8323 120.904 38.1224C120.496 38.4126 120.19 38.8224 120.027 39.2947L116.779 48.4872C116.659 48.8272 116.464 49.1359 116.208 49.3908C115.952 49.6457 115.643 49.8402 115.301 49.96Z",
              fill: "white",
              "fill-opacity": "0.4",
            }),
            (0, t.jsx)("g", {
              "clip-path": "url(#clip0_1926_8318)",
              children: (0, t.jsxs)("g", {
                filter: "url(#filter1_d_1926_8318)",
                children: [
                  (0, t.jsx)("path", {
                    d: "M100.247 89.0583C104.135 89.0583 107.286 85.9068 107.286 82.0191C107.286 78.1315 104.135 74.9799 100.247 74.9799C96.3594 74.9799 93.2079 78.1315 93.2079 82.0191C93.2079 85.9068 96.3594 89.0583 100.247 89.0583Z",
                    fill: "url(#paint3_linear_1926_8318)",
                  }),
                  (0, t.jsx)("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M72.0903 53.8623C70.1464 53.8623 68.5707 55.4381 68.5707 57.3819C68.5707 59.3257 70.1464 60.9015 72.0903 60.9015H82.6491C84.5929 60.9015 86.1687 62.4773 86.1687 64.4211C86.1687 66.3649 84.5929 67.9407 82.6491 67.9407L66.8109 67.9407C64.867 67.9407 63.2913 69.5165 63.2913 71.4603C63.2913 73.4041 64.867 74.9799 66.8109 74.9799L75.6099 74.9799C77.5537 74.9799 79.1295 76.5557 79.1295 78.4995C79.1295 80.4433 77.5537 82.0191 75.6099 82.0191H68.5707C66.6268 82.0191 65.0511 83.5949 65.0511 85.5387C65.0511 87.4826 66.6268 89.0583 68.5707 89.0583H72.9773C76.103 101.203 87.1271 110.176 100.247 110.176C115.798 110.176 128.404 97.5697 128.404 82.0191C128.404 66.4685 115.798 53.8623 100.247 53.8623H72.0903ZM100.247 96.0975C108.022 96.0975 114.325 89.7944 114.325 82.0191C114.325 74.2438 108.022 67.9407 100.247 67.9407C92.4718 67.9407 86.1687 74.2438 86.1687 82.0191C86.1687 89.7944 92.4718 96.0975 100.247 96.0975Z",
                    fill: "url(#paint4_linear_1926_8318)",
                  }),
                  (0, t.jsx)("path", {
                    d: "M56.2521 74.9799C58.1959 74.9799 59.7717 73.4041 59.7717 71.4603C59.7717 69.5165 58.1959 67.9407 56.2521 67.9407H54.4923C52.5484 67.9407 50.9727 69.5165 50.9727 71.4603C50.9727 73.4041 52.5484 74.9799 54.4923 74.9799H56.2521Z",
                    fill: "url(#paint5_linear_1926_8318)",
                  }),
                ],
              }),
            }),
            (0, t.jsx)("path", {
              d: "M82.5163 101.184L80.5514 95.6655C80.4566 95.3818 80.2747 95.1349 80.0313 94.96C79.7879 94.7851 79.4955 94.6909 79.1954 94.6909C78.8953 94.6909 78.6029 94.7851 78.3595 94.96C78.1161 95.1349 77.9342 95.3818 77.8394 95.6655L76.0206 101.184C75.9497 101.386 75.8341 101.57 75.6823 101.721C75.5305 101.872 75.3464 101.988 75.1437 102.058L69.525 103.887C69.246 103.985 69.0044 104.167 68.8335 104.407C68.6626 104.648 68.5708 104.936 68.5708 105.23C68.5708 105.525 68.6626 105.813 68.8335 106.053C69.0044 106.294 69.246 106.476 69.525 106.574L74.9976 108.483C75.2002 108.554 75.3843 108.669 75.5361 108.821C75.6879 108.972 75.8036 109.155 75.8745 109.357L77.7745 114.795C77.8692 115.079 78.0512 115.326 78.2945 115.501C78.5379 115.676 78.8304 115.77 79.1304 115.77C79.4305 115.77 79.723 115.676 79.9663 115.501C80.2097 115.326 80.3917 115.079 80.4864 114.795L82.5163 109.357C82.5872 109.155 82.7029 108.972 82.8547 108.821C83.0065 108.669 83.1906 108.554 83.3932 108.483L88.8658 106.574C89.1448 106.476 89.3864 106.294 89.5573 106.053C89.7282 105.813 89.82 105.525 89.82 105.23C89.82 104.936 89.7282 104.648 89.5573 104.407C89.3864 104.167 89.1448 103.985 88.8658 103.887L83.3282 101.977C83.1457 101.908 82.9794 101.801 82.8397 101.665C82.7001 101.528 82.59 101.365 82.5163 101.184Z",
              fill: "white",
              "fill-opacity": "0.8",
            }),
            (0, t.jsx)("path", {
              d: "M106.452 37.326L105.28 34.0352C105.224 33.866 105.115 33.7188 104.97 33.6145C104.825 33.5102 104.651 33.4541 104.472 33.4541C104.293 33.4541 104.118 33.5102 103.973 33.6145C103.828 33.7188 103.72 33.866 103.663 34.0352L102.579 37.326C102.536 37.4464 102.467 37.5558 102.377 37.646C102.286 37.7363 102.177 37.805 102.056 37.8471L98.7053 38.9376C98.539 38.996 98.3949 39.1044 98.293 39.2479C98.1911 39.3914 98.1364 39.5628 98.1364 39.7386C98.1364 39.9144 98.1911 40.0858 98.293 40.2293C98.3949 40.3727 98.539 40.4812 98.7053 40.5396L101.969 41.6783C102.089 41.7204 102.199 41.7892 102.29 41.8794C102.38 41.9696 102.449 42.079 102.491 42.1994L103.624 45.4419C103.681 45.6111 103.789 45.7583 103.934 45.8626C104.08 45.9669 104.254 46.0231 104.433 46.0231C104.612 46.0231 104.786 45.9669 104.931 45.8626C105.076 45.7583 105.185 45.6111 105.241 45.4419L106.452 42.1994C106.494 42.079 106.563 41.9696 106.654 41.8794C106.744 41.7892 106.854 41.7204 106.975 41.6783L110.238 40.5396C110.404 40.4812 110.548 40.3727 110.65 40.2293C110.752 40.0858 110.807 39.9144 110.807 39.7386C110.807 39.5628 110.752 39.3914 110.65 39.2479C110.548 39.1044 110.404 38.996 110.238 38.9376L106.936 37.7989C106.827 37.7573 106.728 37.6938 106.645 37.6125C106.561 37.5311 106.496 37.4336 106.452 37.326Z",
              fill: "white",
              "fill-opacity": "0.8",
            }),
            (0, t.jsx)("path", {
              d: "M194.876 25.445L187.862 27.9108C187.501 28.0342 187.188 28.2668 186.966 28.5763C186.744 28.8858 186.625 29.2566 186.625 29.6369C186.625 30.0172 186.744 30.388 186.966 30.6974C187.188 31.0069 187.501 31.2396 187.862 31.3629L194.876 33.8287C195.137 33.9184 195.374 34.066 195.569 34.2603C195.764 34.4547 195.912 34.6908 196.002 34.9506L198.476 41.9411C198.6 42.3008 198.834 42.6131 199.144 42.8341C199.455 43.0552 199.827 43.174 200.208 43.174C200.59 43.174 200.962 43.0552 201.272 42.8341C201.583 42.6131 201.816 42.3008 201.94 41.9411L204.414 34.9506C204.506 34.6916 204.655 34.4564 204.849 34.2623C205.044 34.0681 205.28 33.9199 205.54 33.8287L212.567 31.3629C212.928 31.2396 213.241 31.0069 213.463 30.6974C213.685 30.388 213.804 30.0172 213.804 29.6369C213.804 29.2566 213.685 28.8858 213.463 28.5763C213.241 28.2668 212.928 28.0342 212.567 27.9108L205.54 25.445C205.282 25.3515 205.047 25.2025 204.852 25.0087C204.658 24.8148 204.508 24.5808 204.414 24.3231L201.94 17.3203C201.816 16.9605 201.583 16.6483 201.272 16.4273C200.962 16.2062 200.59 16.0874 200.208 16.0874C199.827 16.0874 199.455 16.2062 199.144 16.4273C198.834 16.6483 198.6 16.9605 198.476 17.3203L196.002 24.3231C195.911 24.5821 195.762 24.8173 195.567 25.0114C195.372 25.2056 195.136 25.3538 194.876 25.445Z",
              fill: "url(#paint6_linear_1926_8318)",
            }),
            (0, t.jsx)("path", {
              opacity: "0.8",
              d: "M10.82 107.861L9.3231 103.657C9.25094 103.441 9.11233 103.253 8.92693 103.12C8.74152 102.986 8.51873 102.915 8.29014 102.915C8.06155 102.915 7.83876 102.986 7.65335 103.12C7.46795 103.253 7.32934 103.441 7.25717 103.657L5.87164 107.861C5.81763 108.015 5.72952 108.155 5.61387 108.27C5.49822 108.385 5.358 108.473 5.20362 108.527L0.923316 109.92C0.710787 109.995 0.526729 110.133 0.396531 110.316C0.266333 110.5 0.196411 110.719 0.196411 110.943C0.196411 111.168 0.266333 111.387 0.396531 111.57C0.526729 111.754 0.710787 111.892 0.923316 111.967L5.09228 113.421C5.24666 113.475 5.38688 113.563 5.50253 113.678C5.61819 113.794 5.70629 113.933 5.76031 114.087L7.20769 118.23C7.27985 118.446 7.41846 118.634 7.60387 118.767C7.78927 118.9 8.01206 118.972 8.24065 118.972C8.46925 118.972 8.69204 118.9 8.87744 118.767C9.06285 118.634 9.20146 118.446 9.27362 118.23L10.82 114.087C10.874 113.933 10.9621 113.794 11.0777 113.678C11.1934 113.563 11.3336 113.475 11.488 113.421L15.657 111.967C15.8695 111.892 16.0535 111.754 16.1837 111.57C16.3139 111.387 16.3839 111.168 16.3839 110.943C16.3839 110.719 16.3139 110.5 16.1837 110.316C16.0535 110.133 15.8695 109.995 15.657 109.92L11.4385 108.465C11.2994 108.412 11.1728 108.331 11.0664 108.227C10.96 108.123 10.8761 107.999 10.82 107.861Z",
              fill: "url(#paint7_linear_1926_8318)",
            }),
            (0, t.jsx)("path", {
              opacity: "0.4",
              d: "M17.5985 132.255L16.7059 129.748C16.6629 129.619 16.5802 129.507 16.4697 129.428C16.3591 129.348 16.2263 129.306 16.09 129.306C15.9537 129.306 15.8208 129.348 15.7103 129.428C15.5997 129.507 15.5171 129.619 15.474 129.748L14.6478 132.255C14.6156 132.347 14.5631 132.43 14.4941 132.499C14.4252 132.568 14.3416 132.62 14.2495 132.652L11.6972 133.483C11.5705 133.527 11.4608 133.61 11.3831 133.719C11.3055 133.829 11.2638 133.959 11.2638 134.093C11.2638 134.227 11.3055 134.358 11.3831 134.467C11.4608 134.576 11.5705 134.659 11.6972 134.703L14.1831 135.571C14.2752 135.603 14.3588 135.655 14.4278 135.724C14.4967 135.793 14.5493 135.876 14.5815 135.968L15.4445 138.438C15.4875 138.567 15.5702 138.679 15.6807 138.758C15.7913 138.838 15.9241 138.881 16.0605 138.881C16.1968 138.881 16.3296 138.838 16.4402 138.758C16.5507 138.679 16.6334 138.567 16.6764 138.438L17.5985 135.968C17.6307 135.876 17.6832 135.793 17.7522 135.724C17.8211 135.655 17.9047 135.603 17.9968 135.571L20.4827 134.703C20.6094 134.659 20.7192 134.576 20.7968 134.467C20.8744 134.358 20.9161 134.227 20.9161 134.093C20.9161 133.959 20.8744 133.829 20.7968 133.719C20.7192 133.61 20.6094 133.527 20.4827 133.483L17.9673 132.615C17.8844 132.584 17.8088 132.535 17.7454 132.473C17.6819 132.412 17.6319 132.337 17.5985 132.255Z",
              fill: "url(#paint8_linear_1926_8318)",
            }),
            (0, t.jsx)("path", {
              opacity: "0.8",
              d: "M178.487 9.67272L177.595 7.16585C177.552 7.03695 177.469 6.92483 177.359 6.84537C177.248 6.7659 177.115 6.72314 176.979 6.72314C176.843 6.72314 176.71 6.7659 176.599 6.84537C176.489 6.92483 176.406 7.03695 176.363 7.16585L175.537 9.67272C175.505 9.76446 175.452 9.84779 175.383 9.91652C175.314 9.98525 175.23 10.0376 175.138 10.0697L172.586 10.9004C172.459 10.9449 172.35 11.0275 172.272 11.1368C172.194 11.2461 172.153 11.3767 172.153 11.5106C172.153 11.6445 172.194 11.7751 172.272 11.8844C172.35 11.9937 172.459 12.0763 172.586 12.1208L175.072 12.9883C175.164 13.0204 175.248 13.0727 175.317 13.1414C175.386 13.2102 175.438 13.2935 175.47 13.3852L176.333 15.8554C176.376 15.9843 176.459 16.0964 176.57 16.1758C176.68 16.2553 176.813 16.2981 176.949 16.2981C177.086 16.2981 177.219 16.2553 177.329 16.1758C177.44 16.0964 177.522 15.9843 177.565 15.8554L178.487 13.3852C178.52 13.2935 178.572 13.2102 178.641 13.1414C178.71 13.0727 178.794 13.0204 178.886 12.9883L181.372 12.1208C181.498 12.0763 181.608 11.9937 181.686 11.8844C181.763 11.7751 181.805 11.6445 181.805 11.5106C181.805 11.3767 181.763 11.2461 181.686 11.1368C181.608 11.0275 181.498 10.9449 181.372 10.9004L178.856 10.0329C178.773 10.0012 178.698 9.95292 178.634 9.89096C178.571 9.829 178.521 9.75472 178.487 9.67272Z",
              fill: "url(#paint9_linear_1926_8318)",
            }),
            (0, t.jsxs)("defs", {
              children: [
                (0, t.jsxs)("filter", {
                  id: "filter0_f_1926_8318",
                  x: "10.7799",
                  y: "-11.3398",
                  width: "176.12",
                  height: "176.12",
                  filterUnits: "userSpaceOnUse",
                  "color-interpolation-filters": "sRGB",
                  children: [
                    (0, t.jsx)("feFlood", {
                      "flood-opacity": "0",
                      result: "BackgroundImageFix",
                    }),
                    (0, t.jsx)("feBlend", {
                      mode: "normal",
                      in: "SourceGraphic",
                      in2: "BackgroundImageFix",
                      result: "shape",
                    }),
                    (0, t.jsx)("feGaussianBlur", {
                      stdDeviation: "7",
                      result: "effect1_foregroundBlur_1926_8318",
                    }),
                  ],
                }),
                (0, t.jsxs)("filter", {
                  id: "filter1_d_1926_8318",
                  x: "40.9727",
                  y: "47.8623",
                  width: "97.4313",
                  height: "76.3135",
                  filterUnits: "userSpaceOnUse",
                  "color-interpolation-filters": "sRGB",
                  children: [
                    (0, t.jsx)("feFlood", {
                      "flood-opacity": "0",
                      result: "BackgroundImageFix",
                    }),
                    (0, t.jsx)("feColorMatrix", {
                      in: "SourceAlpha",
                      type: "matrix",
                      values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                      result: "hardAlpha",
                    }),
                    (0, t.jsx)("feOffset", { dy: "4" }),
                    (0, t.jsx)("feGaussianBlur", { stdDeviation: "5" }),
                    (0, t.jsx)("feComposite", {
                      in2: "hardAlpha",
                      operator: "out",
                    }),
                    (0, t.jsx)("feColorMatrix", {
                      type: "matrix",
                      values:
                        "0 0 0 0 0.63195 0 0 0 0 0.317281 0 0 0 0 0.600483 0 0 0 0.25 0",
                    }),
                    (0, t.jsx)("feBlend", {
                      mode: "normal",
                      in2: "BackgroundImageFix",
                      result: "effect1_dropShadow_1926_8318",
                    }),
                    (0, t.jsx)("feBlend", {
                      mode: "normal",
                      in: "SourceGraphic",
                      in2: "effect1_dropShadow_1926_8318",
                      result: "shape",
                    }),
                  ],
                }),
                (0, t.jsxs)("linearGradient", {
                  id: "paint0_linear_1926_8318",
                  x1: "98.8401",
                  y1: "2.66016",
                  x2: "98.8401",
                  y2: "150.78",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, t.jsx)("stop", { "stop-color": "#FFBDF2" }),
                    (0, t.jsx)("stop", {
                      offset: "1",
                      "stop-color": "#E742E1",
                    }),
                  ],
                }),
                (0, t.jsxs)("linearGradient", {
                  id: "paint1_linear_1926_8318",
                  x1: "38.8339",
                  y1: "75.405",
                  x2: "157.106",
                  y2: "75.405",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, t.jsx)("stop", { "stop-color": "#E2C7FA" }),
                    (0, t.jsx)("stop", {
                      offset: "1",
                      "stop-color": "#F3D3DE",
                    }),
                  ],
                }),
                (0, t.jsxs)("linearGradient", {
                  id: "paint2_linear_1926_8318",
                  x1: "98.8408",
                  y1: "2",
                  x2: "98.8408",
                  y2: "150.12",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, t.jsx)("stop", { "stop-color": "#FFBDF2" }),
                    (0, t.jsx)("stop", {
                      offset: "1",
                      "stop-color": "#E742E1",
                    }),
                  ],
                }),
                (0, t.jsxs)("linearGradient", {
                  id: "paint3_linear_1926_8318",
                  x1: "50.9727",
                  y1: "82.0191",
                  x2: "128.404",
                  y2: "82.0191",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, t.jsx)("stop", { "stop-color": "#B473F5" }),
                    (0, t.jsx)("stop", {
                      offset: "1",
                      "stop-color": "#E292AA",
                    }),
                  ],
                }),
                (0, t.jsxs)("linearGradient", {
                  id: "paint4_linear_1926_8318",
                  x1: "50.9727",
                  y1: "82.0191",
                  x2: "128.404",
                  y2: "82.0191",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, t.jsx)("stop", { "stop-color": "#B473F5" }),
                    (0, t.jsx)("stop", {
                      offset: "1",
                      "stop-color": "#E292AA",
                    }),
                  ],
                }),
                (0, t.jsxs)("linearGradient", {
                  id: "paint5_linear_1926_8318",
                  x1: "50.9727",
                  y1: "82.0191",
                  x2: "128.404",
                  y2: "82.0191",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, t.jsx)("stop", { "stop-color": "#B473F5" }),
                    (0, t.jsx)("stop", {
                      offset: "1",
                      "stop-color": "#E292AA",
                    }),
                  ],
                }),
                (0, t.jsxs)("linearGradient", {
                  id: "paint6_linear_1926_8318",
                  x1: "186.625",
                  y1: "29.6307",
                  x2: "213.804",
                  y2: "29.6307",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, t.jsx)("stop", { "stop-color": "#C490F5" }),
                    (0, t.jsx)("stop", {
                      offset: "1",
                      "stop-color": "#E7A7BD",
                    }),
                  ],
                }),
                (0, t.jsxs)("linearGradient", {
                  id: "paint7_linear_1926_8318",
                  x1: "0.196411",
                  y1: "110.943",
                  x2: "16.3839",
                  y2: "110.943",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, t.jsx)("stop", { "stop-color": "#C490F5" }),
                    (0, t.jsx)("stop", {
                      offset: "1",
                      "stop-color": "#E7A7BD",
                    }),
                  ],
                }),
                (0, t.jsxs)("linearGradient", {
                  id: "paint8_linear_1926_8318",
                  x1: "11.2638",
                  y1: "134.093",
                  x2: "20.9161",
                  y2: "134.093",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, t.jsx)("stop", { "stop-color": "#B473F5" }),
                    (0, t.jsx)("stop", {
                      offset: "1",
                      "stop-color": "#E292AA",
                    }),
                  ],
                }),
                (0, t.jsxs)("linearGradient", {
                  id: "paint9_linear_1926_8318",
                  x1: "172.153",
                  y1: "11.5106",
                  x2: "181.805",
                  y2: "11.5106",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, t.jsx)("stop", { "stop-color": "#E2C7FA" }),
                    (0, t.jsx)("stop", {
                      offset: "1",
                      "stop-color": "#F3D3DE",
                    }),
                  ],
                }),
                (0, t.jsx)("clipPath", {
                  id: "clip0_1926_8318",
                  children: (0, t.jsx)("rect", {
                    width: "84.4704",
                    height: "84.4705",
                    fill: "white",
                    transform: "translate(47.4531 39.7837)",
                  }),
                }),
              ],
            }),
          ],
        });
      };
    },
    997103: function (e, s, r) {
      e.exports = {
        erroredContainer: "erroredContainer_fc061a",
        header: "header_fc061a",
        erroredHeader: "erroredHeader_fc061a",
        title: "title_fc061a",
        titleImage: "titleImage_fc061a",
        description: "description_fc061a",
        searchbar: "searchbar_fc061a",
        list: "list_fc061a",
        erroredContent: "erroredContent_fc061a",
        footer: "footer_fc061a",
        submit: "submit_fc061a",
        headerSeparator: "headerSeparator_fc061a",
        footerSeparator: "footerSeparator_fc061a",
        remindContainer: "remindContainer_fc061a",
        remindHeader: "remindHeader_fc061a",
      };
    },
    67871: function (e, s, r) {
      e.exports = {
        container: "container_f62455",
        muted: "muted_f62455",
        user: "user_f62455",
        checkbox: "checkbox_f62455",
      };
    },
    819347: function (e, s, r) {
      e.exports = {
        confrimationContainer: "confrimationContainer_cc0775",
        closeButtonContainer: "closeButtonContainer_cc0775",
        headerIcon: "headerIcon_cc0775",
        heading: "heading_cc0775",
        confirmedUserContainer: "confirmedUserContainer_cc0775",
        referredUserRowContainer: "referredUserRowContainer_cc0775",
        referredUserRowBody: "referredUserRowBody_cc0775",
        displayNameClickableContainer: "displayNameClickableContainer_cc0775",
        displayName: "displayName_cc0775",
        errorDisplayName: "errorDisplayName_cc0775",
        userName: "userName_cc0775",
        erroredAvatar: "erroredAvatar_cc0775",
      };
    },
  },
]);
//# sourceMappingURL=504b4da6ec8e59a5e716.js.map
