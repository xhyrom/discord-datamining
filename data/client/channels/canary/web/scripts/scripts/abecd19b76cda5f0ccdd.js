"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["22207"],
  {
    139230: function (e, i, n) {
      n.r(i),
        n.d(i, {
          default: function () {
            return O;
          },
        }),
        n(47120),
        n(789020);
      var a = n(200651),
        t = n(192379),
        l = n(512969),
        s = n(692547),
        r = n(481060),
        d = n(100527),
        c = n(906732),
        o = n(895924),
        u = n(70097),
        m = n(665149),
        v = n(703656),
        x = n(630388),
        h = n(566620),
        b = n(122613),
        I = n(678173),
        p = n(880308),
        _ = n(636508),
        g = n(696068),
        C = n(361213),
        j = n(778569),
        N = n(412019),
        y = n(431136),
        f = n(226799),
        T = n(981631),
        k = n(388032),
        S = n(658638);
      function O(e) {
        var i, n;
        let { match: o } = e,
          b = null !== (i = (0, v.DR)()) && void 0 !== i ? i : [],
          { analyticsLocations: _ } = (0, c.ZP)([
            ...b,
            d.Z.ACTIVITY_DETAIL_PAGE,
          ]),
          { applicationId: g } = o.params;
        (0, p.g)(),
          t.useEffect(() => {
            (0, h.w1)({ guildId: null });
          }, []);
        let N = (0, j.Z)({
            applicationId: null != g ? g : "",
            size: 2048,
            names: ["embedded_cover"],
          }),
          y = (0, I.T)(null, null != g && "" !== g ? g : null);
        if (null == g || null == y) return null;
        if (!(0, x.yE)(y.application.flags, T.udG.EMBEDDED))
          return (0, a.jsx)(l.l_, { to: T.Z5c.ACTIVITIES });
        let O =
            null != y.activity.activity_preview_video_asset_id
              ? (0, C.Z)(g, y.activity.activity_preview_video_asset_id)
              : null,
          A = f.o[g],
          B =
            (null == A ? void 0 : A.playersSuggestionMin) != null &&
            (null == A ? void 0 : A.playersSuggestionMax) != null
              ? ""
                  .concat(A.playersSuggestionMin, " - ")
                  .concat(A.playersSuggestionMax)
              : void 0;
        return (0, a.jsx)(c.Gt, {
          value: _,
          children: (0, a.jsxs)("div", {
            className: S.outerContainer,
            children: [
              (0, a.jsxs)(m.ZP, {
                children: [
                  (0, a.jsxs)("div", {
                    className: S.titleContainer,
                    children: [
                      (0, a.jsx)(r.ActivitiesIcon, {
                        size: "md",
                        color: "currentColor",
                        className: S.rocketIcon,
                      }),
                      (0, a.jsx)(r.Heading, {
                        variant: "heading-md/semibold",
                        children: y.application.name,
                      }),
                    ],
                  }),
                  (0, a.jsx)("div", {
                    className: S.__invalid_headerBarRightSideFiller,
                  }),
                ],
              }),
              (0, a.jsx)(r.Scroller, {
                className: S.scroller,
                children: (0, a.jsxs)("div", {
                  className: S.innerContainer,
                  children: [
                    (0, a.jsxs)("div", {
                      className: S.header,
                      children: [
                        (0, a.jsx)("img", {
                          src: N.url,
                          className: S.headerImage,
                          alt: y.application.name,
                        }),
                        (0, a.jsx)("div", { className: S.headerImageOverlay }),
                        (0, a.jsxs)(r.Clickable, {
                          onClick: () => {
                            (0, v.op)();
                          },
                          className: S.backButtonContainer,
                          children: [
                            (0, a.jsx)(r.ChevronSmallLeftIcon, {
                              size: "md",
                              color: s.Z.unsafe_rawColors.WHITE_100,
                              className: S.backButtonIcon,
                            }),
                            (0, a.jsx)(r.Heading, {
                              color: "always-white",
                              variant: "heading-lg/semibold",
                              children: k.intl.string(k.t["13/7kZ"]),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, a.jsx)("div", {
                      className: S.detailsOuterContainer,
                      children: (0, a.jsx)("div", {
                        className: S.detailsInnerContainer,
                        children: (0, a.jsxs)("div", {
                          className: S.detailsInnerInnerContainer,
                          children: [
                            (0, a.jsxs)("div", {
                              className: S.activityDetailsContainer,
                              children: [
                                (0, a.jsxs)("div", {
                                  children: [
                                    (0, a.jsx)("div", {
                                      className: S.detailsTitle,
                                      children: (0, a.jsx)(r.Heading, {
                                        variant: "heading-xxl/bold",
                                        children: y.application.name,
                                      }),
                                    }),
                                    (0, a.jsxs)("div", {
                                      className: S.detailsDetails,
                                      children: [
                                        null != B
                                          ? (0, a.jsxs)("div", {
                                              className: S.detailItem,
                                              children: [
                                                (0, a.jsx)(r.GroupIcon, {
                                                  size: "xs",
                                                  color: "currentColor",
                                                }),
                                                (0, a.jsx)(r.Text, {
                                                  variant: "text-xs/semibold",
                                                  className: S.detailItemText,
                                                  children: k.intl.format(
                                                    k.t.T3isFB,
                                                    { nPlayers: B },
                                                  ),
                                                }),
                                              ],
                                            })
                                          : null,
                                        (null == A
                                          ? void 0
                                          : A.timeSuggestionMinutes) != null
                                          ? (0, a.jsxs)("div", {
                                              className: S.detailItem,
                                              children: [
                                                (0, a.jsx)(r.HourglassIcon, {
                                                  size: "xs",
                                                  color: "currentColor",
                                                }),
                                                (0, a.jsx)(r.Text, {
                                                  variant: "text-xs/semibold",
                                                  className: S.detailItemText,
                                                  children: k.intl.format(
                                                    k.t.dehcUV,
                                                    {
                                                      nMinutes:
                                                        A.timeSuggestionMinutes,
                                                    },
                                                  ),
                                                }),
                                              ],
                                            })
                                          : null,
                                        (0, a.jsxs)("div", {
                                          className: S.detailItem,
                                          children: [
                                            (0, a.jsx)(r.TagsIcon, {
                                              size: "xs",
                                              color: "currentColor",
                                            }),
                                            (0, a.jsx)(r.Text, {
                                              variant: "text-xs/semibold",
                                              className: S.detailItemText,
                                              children: y.application.tags
                                                .slice(0, 3)
                                                .join(", "),
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, a.jsx)(r.Heading, {
                                  variant: "heading-lg/medium",
                                  className: S.detailsDescription,
                                  children: y.application.description,
                                }),
                                (0, a.jsx)("div", { className: S.divider }),
                                (0, a.jsxs)("div", {
                                  className: S.imagesContainer,
                                  children: [
                                    (null !==
                                      (n =
                                        null == A
                                          ? void 0
                                          : A.gameplayImageUrls) && void 0 !== n
                                      ? n
                                      : []
                                    ).map((e) =>
                                      (0, a.jsx)(
                                        "img",
                                        {
                                          src: e,
                                          alt: k.intl.formatToPlainString(
                                            k.t.YOslsL,
                                            {
                                              activityName: y.application.name,
                                            },
                                          ),
                                          className: S.activityImage,
                                        },
                                        e,
                                      ),
                                    ),
                                    (0, a.jsx)(u.Z, {
                                      loop: !0,
                                      autoPlay: !0,
                                      muted: !0,
                                      className: S.activityImage,
                                      src: O,
                                      poster: N.url,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, a.jsx)("div", {
                              className: S.launcherOuterContainer,
                              children: (0, a.jsx)(D, { activityItem: y }),
                            }),
                          ],
                        }),
                      }),
                    }),
                  ],
                }),
              }),
            ],
          }),
        });
      }
      function D(e) {
        var i, l;
        let { activityItem: s } = e,
          { analyticsLocations: d } = (0, c.ZP)(),
          [u, m] = t.useState(
            null !== (i = (0, _.$)()) && void 0 !== i ? i : void 0,
          ),
          [v, x] = t.useState(
            null !== (l = (0, g.d)({ guildId: u })) && void 0 !== l
              ? l
              : void 0,
          ),
          h = (0, _.W)(),
          I = (0, g.F)(u),
          p = t.useCallback(async () => {
            var e;
            if (null != v && null != u)
              await (0, b.Z)({
                targetApplicationId:
                  null == s
                    ? void 0
                    : null === (e = s.application) || void 0 === e
                      ? void 0
                      : e.id,
                channelId: v,
                analyticsLocations: d,
                commandOrigin: o.bB.ACTIVITY_DETAILS,
              });
          }, [s, d, v, u]),
          C = t.useCallback(() => {
            (0, r.openModalLazy)(async () => {
              let { default: e } = await Promise.all([
                n.e("60133"),
                n.e("39739"),
              ]).then(n.bind(n, 827940));
              return (i) =>
                (0, a.jsx)(e, { activityItem: s, ...i, analyticsLocations: d });
            });
          }, [s, d]);
        return (0, a.jsxs)("div", {
          className: S.launcherInnerContainer,
          children: [
            (0, a.jsx)(r.Text, {
              variant: "text-md/medium",
              children: k.intl.string(k.t.lfSF4O),
            }),
            (0, a.jsx)(r.Select, {
              placeholder: k.intl.string(k.t.etZ9tb),
              optionClassName: S.__invalid_option,
              options: h,
              renderOptionValue: (e) => {
                let i = e.find((e) => e.value === u);
                return null == i ? null : (0, a.jsx)(y.m, { guildId: i.value });
              },
              renderOptionLabel: (e) => {
                let { value: i } = e;
                return (0, a.jsx)(y.m, { guildId: i });
              },
              isSelected: (e) => e === u,
              select: (e) => {
                var i;
                m(e),
                  x(
                    null !== (i = (0, g.d)({ guildId: e })) && void 0 !== i
                      ? i
                      : void 0,
                  );
              },
              serialize: (e) => e,
            }),
            (0, a.jsx)(r.Select, {
              placeholder: k.intl.string(k.t.SUryfX),
              optionClassName: S.__invalid_option,
              options: I,
              isSelected: (e) => {
                let { channel: i } = e;
                return i.id === v;
              },
              select: (e) => {
                let { channel: i } = e;
                return x(i.id);
              },
              serialize: (e) => {
                let { channel: i } = e;
                return i.id;
              },
              renderOptionValue: () => {
                let e = I.find((e) => e.value.channel.id === v);
                return null == e
                  ? null
                  : (0, a.jsx)(N.O, {
                      channel: e.value.channel,
                      users: e.value.users,
                    });
              },
              renderOptionLabel: (e) => {
                let {
                  value: { channel: i, users: n },
                } = e;
                return (0, a.jsx)(N.O, { channel: i, users: n });
              },
            }),
            (0, a.jsx)(r.Button, {
              fullWidth: !0,
              disabled:
                null == u ||
                null == v ||
                !h.some((e) => e.value === u) ||
                !I.some((e) => e.value.channel.id === v),
              onClick: p,
              children: k.intl.string(k.t.I0v0Qk),
            }),
            (0, a.jsx)("div", { className: S.divider }),
            (0, a.jsx)(r.Button, {
              fullWidth: !0,
              color: r.Button.Colors.PRIMARY,
              onClick: C,
              children: k.intl.string(k.t.RDE0SU),
            }),
          ],
        });
      }
    },
    658638: function (e, i, n) {
      e.exports = {
        outerContainer: "outerContainer_b58db2",
        rocketIcon: "rocketIcon_b58db2",
        scroller: "scroller_b58db2",
        innerContainer: "innerContainer_b58db2",
        header: "header_b58db2",
        headerImage: "headerImage_b58db2",
        headerImageOverlay: "headerImageOverlay_b58db2",
        backButtonContainer: "backButtonContainer_b58db2",
        titleContainer: "titleContainer_b58db2",
        backButtonIcon: "backButtonIcon_b58db2",
        detailsOuterContainer: "detailsOuterContainer_b58db2",
        detailsInnerContainer: "detailsInnerContainer_b58db2",
        detailsInnerInnerContainer: "detailsInnerInnerContainer_b58db2",
        activityDetailsContainer: "activityDetailsContainer_b58db2",
        detailsTitle: "detailsTitle_b58db2",
        detailsDetails: "detailsDetails_b58db2",
        detailItem: "detailItem_b58db2",
        detailItemText: "detailItemText_b58db2",
        detailsDescription: "detailsDescription_b58db2",
        divider: "divider_b58db2",
        imagesContainer: "imagesContainer_b58db2",
        activityImage: "activityImage_b58db2",
        launcherOuterContainer: "launcherOuterContainer_b58db2",
        launcherInnerContainer: "launcherInnerContainer_b58db2",
      };
    },
    620417: function (e, i, n) {
      e.exports = {
        channelInfo: "channelInfo_c573a1",
        speakerIcon: "speakerIcon_c573a1",
        divider: "divider_c573a1",
        channelName: "channelName_c573a1",
        channelItemActivities: "channelItemActivities_c573a1",
        channelActivitiesText:
          "channelActivitiesText_c573a1 channelName_c573a1",
        voiceUserContainer: "voiceUserContainer_c573a1",
      };
    },
    63605: function (e, i, n) {
      e.exports = {
        container: "container_e2cb96",
        acronym: "acronym_e2cb96",
        text: "text_e2cb96",
      };
    },
  },
]);
//# sourceMappingURL=abecd19b76cda5f0ccdd.js.map
