"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["31549"],
  {
    646764(e, t, s) {
      s.d(t, { A: () => M });
      var r = s(627968),
        n = s(64700),
        l = s(503698),
        i = s.n(l),
        a = s(621466),
        c = s(17928),
        u = s(939249),
        o = s(834730),
        d = s(885574),
        m = s(661531),
        f = s(775602),
        A = s(607470),
        T = s(859387),
        x = s(18437),
        C = s(590202),
        p = s(801365),
        h = s(241124),
        j = s(415441),
        R = s(734736),
        E = s(545986),
        w = s(139384),
        N = s(654487),
        _ = s(985018),
        g = s(369453);
      let M = function (e) {
        let t,
          {
            className: s,
            quest: l,
            autoplay: M = !0,
            learnMoreStyle: q = null,
            learnMoreFontSize: v,
            sourceQuestContent: y,
            lazyLoad: I = !1,
            fullWidth: W = !1,
            style: L,
          } = e,
          Q = (0, x.Ut)(),
          S = (0, c.bG)([f.A], () => f.A.useReducedMotion),
          b = n.useMemo(() => (0, T.tW)(l, T.fY.REWARD), [l]),
          k = n.useMemo(() => (0, T.tW)(l, T.fY.REWARD_IMAGE), [l]),
          D = n.useCallback(
            (t) => {
              (0, a.vq)(t.currentTarget, HTMLElement) && t.currentTarget.blur(),
                Q({
                  questId: l.id,
                  questContent: e.questContent,
                  questContentPosition: e.questContentPosition,
                  questContentCTA: C.Cy.REWARD_LEARN_MORE,
                  sourceQuestContent: y,
                }),
                (0, E.navigateToQuestHome)({
                  fromContent: e.questContent,
                  questId: l.id,
                }),
                e.onClick?.(t);
            },
            [Q, l.id, e, y],
          ),
          V = n.useRef(null),
          Y = n.useRef(M),
          H = (0, p.K9)(l.config);
        if (
          (n.useEffect(() => {
            if (null != V.current) {
              if (!b.isAnimated || S) {
                (V.current.currentTime = 0), V.current.pause();
                return;
              }
              M && !Y.current
                ? V.current.play()
                : !M &&
                  Y.current &&
                  ((V.current.currentTime = 0), V.current.pause()),
                (Y.current = M);
            }
          }, [M, b, S]),
          (0, w.A)(V, N.rE.QUEST_HOME_DESKTOP),
          H)
        )
          t = (0, r.jsx)(h.Sn, {
            id: "QuestRewardTile_rewardTileNitro",
            children: (e) => (0, r.jsx)(R.A, { ref: e, className: g.eB }),
          });
        else if (I)
          t = (0, r.jsx)(j.N, {
            showVideo: M,
            imageAsset:
              null != k
                ? {
                    asset: k,
                    assetId: "QuestRewardTile_rewardTileStatic",
                    className: g.XM,
                    alt: _.intl.string(_.t.UMclVN),
                  }
                : void 0,
            videoAsset: {
              asset: b,
              assetId: "QuestRewardTile_rewardTileAnimated",
              className: i()(g.eB, g.WY),
            },
            onLoadComplete: e.onLoadComplete,
          });
        else if (b.isAnimated) {
          let s = (0, T.WV)(b.url);
          t = (0, r.jsx)(h.Sn, {
            id: "QuestRewardTile_rewardTileAnimated",
            children: (t) =>
              (0, r.jsxs)(r.Fragment, {
                children: [
                  null != s &&
                    (0, r.jsx)("img", {
                      alt: _.intl.string(_.t.UMclVN),
                      className: g.XM,
                      src: s,
                    }),
                  (0, r.jsx)(A.A, {
                    ref: (e) => {
                      (t.current = e), (V.current = e);
                    },
                    autoPlay: !S && M,
                    loop: !0,
                    muted: !0,
                    playsInline: !0,
                    className: i()(g.eB, g.WY),
                    controls: !1,
                    onProgress: e.onLoadComplete,
                    children: (0, r.jsx)("source", {
                      src: b.url,
                      type: b.mimetype ?? void 0,
                    }),
                  }),
                ],
              }),
          });
        } else
          t = (0, r.jsx)(h.Sn, {
            id: "QuestRewardTile_rewardTileStatic",
            children: (t) =>
              (0, r.jsx)("img", {
                ref: t,
                alt: (0, p.mq)(l.config),
                className: i()(g.eB, g.Qz),
                src: b.url,
                onLoad: e.onLoadComplete,
              }),
          });
        return null == q
          ? (0, r.jsx)("div", {
              className: i()(g.al, s, { [g.Ij]: W }),
              style: L,
              children: t,
            })
          : (0, r.jsxs)(u.D, {
              className: i()(g.a$, g.al, g.Yi, s, { [g.Ij]: W }),
              onClick: D,
              style: L,
              children: [
                t,
                "text" === q &&
                  (0, r.jsx)(o.E, {
                    color: "always-white",
                    variant: "text-xs/normal",
                    className: g.n_,
                    style: { fontSize: v },
                    children: _.intl.format(_.t.DYAleT, {}),
                  }),
                "icon" === q &&
                  (0, r.jsx)("div", {
                    className: g.n_,
                    children: (0, r.jsx)(d.m, {
                      size: "xxs",
                      color: m.A.colors.WHITE.css,
                    }),
                  }),
              ],
            });
      };
    },
    139384(e, t, s) {
      s.d(t, { A: () => c });
      var r = s(64700),
        n = s(621466),
        l = s(17928),
        i = s(531685),
        a = s(245853);
      let c = (e, t) => {
        let s = r.useRef(!1),
          { enabled: c } = a.m8.useConfig({ location: t }),
          u = (0, l.bG)([i.A], () => i.A.isVisible());
        r.useEffect(() => {
          if (c)
            if (u) {
              if (
                s.current &&
                e?.current != null &&
                (0, n.vq)(e.current, HTMLVideoElement)
              )
                try {
                  e.current.load(), (s.current = !1);
                } catch (e) {}
            } else s.current = !0;
        }, [c, u, e, s]);
      };
    },
  },
]);
//# sourceMappingURL=31549.124dd8302b4345a0.js.map
