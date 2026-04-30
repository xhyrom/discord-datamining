"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["42455"],
  {
    66442(e, t, n) {
      n.d(t, { X: () => I, default: () => w });
      var a = n(627968),
        l = n(64700),
        i = n(503698),
        s = n.n(i),
        o = n(189213),
        c = n(17928),
        r = n(939249),
        d = n(177953),
        u = n(22231),
        h = n(123292),
        m = n(292666),
        _ = n(308528),
        A = n(964486),
        p = n(793574),
        v = n(688810),
        x = n(571694),
        y = n(47167),
        g = n(734057),
        D = n(954571),
        C = n(396787),
        f = n(652215),
        j = n(985018),
        E = n(740885);
      function I(e) {
        let {
            channel: t,
            previewIcon: n,
            onIconChange: l,
            onIconRemove: i,
            analyticsLocations: o,
            petite: c = !1,
            className: m,
            allowRemovingIcon: _ = !0,
          } = e,
          A = void 0 !== n ? n : t?.icon != null ? (0, x.Y)(t, 120) : null,
          { analyticsLocations: y } = (0, v.Ay)(o, p.A.GROUP_DM_ICON_EDITOR),
          g = c ? 32 : 64;
        return (0, a.jsxs)("div", {
          className: s()(E.r2, m),
          children: [
            (0, a.jsxs)(r.D, {
              className: s()(E.zc, { [E.ud]: c }),
              "aria-label": j.intl.string(j.t["0qPSMV"]),
              onClick: () => (0, C.F5)(l, y),
              children: [
                null != A
                  ? (0, a.jsx)("img", { src: A, alt: "", className: E.Dp })
                  : (0, a.jsx)("div", {
                      className: E.Pz,
                      children: (0, a.jsx)(d.n, {
                        size: "custom",
                        width: g,
                        height: g,
                        color: "currentColor",
                      }),
                    }),
                (0, a.jsx)("div", {
                  className: E.qc,
                  children: (0, a.jsx)(u.R, {
                    color: "currentColor",
                    size: c ? "xs" : "refresh_sm",
                  }),
                }),
              ],
            }),
            null != A && _
              ? (0, a.jsx)(h.Q, {
                  variant: "critical",
                  onClick: i,
                  "aria-label": j.intl.string(j.t["uY+Nk/"]),
                  text: j.intl.string(j.t["uY+Nk/"]),
                  textVariant: "text-sm/medium",
                  size: "sm",
                  role: "button",
                  type: "button",
                })
              : null,
          ],
        });
      }
      let w = function (e) {
        let {
            channelId: t,
            onClose: n,
            transitionState: i,
            setHasPendingChanges: s,
            closeOrShowDiscardChangesAlert: r,
            location: d,
          } = e,
          u = (0, c.bG)([g.A], () => g.A.getChannel(t)),
          h = u?.name,
          x = (0, y.e5)(u),
          [w, T] = l.useState(h ?? ""),
          [b, k] = l.useState(void 0),
          R = void 0 !== b,
          { analyticsLocations: N } = (0, v.Ay)(d, p.A.GROUP_DM_EDIT_MODAL),
          M = {
            channel_id: t,
            channel_type: u?.type,
            location: d,
            location_stack: N,
            old_name_set: "" !== h,
            old_icon_set: u?.icon != null,
          };
        return (l.useEffect(() => {
          s(w !== h || R);
        }, [w, h, R, s]),
        (0, A.Ay)(
          () => (
            D.default.track(f.HAw.GDM_EDIT_INTERACTED, {
              ...M,
              action: "opened",
            }),
            () => {
              D.default.track(f.HAw.GDM_EDIT_INTERACTED, {
                ...M,
                action: "dismissed",
              });
            }
          ),
        ),
        null == u)
          ? null
          : (0, a.jsx)(v.f5, {
              value: N,
              children: (0, a.jsx)("form", {
                onSubmit: (e) => {
                  e.preventDefault();
                  let a = w !== h,
                    l = void 0 !== b;
                  if (
                    (D.default.track(f.HAw.GDM_EDIT_INTERACTED, {
                      ...M,
                      action: "saved",
                      new_name_set: "" !== w,
                      new_icon_set: (l ? b : u?.icon) != null,
                      name_changed: a,
                      icon_changed: l,
                    }),
                    a || l)
                  ) {
                    let e = {};
                    a && (e.name = w),
                      l && (e.icon = b),
                      _.A.updateChannel(t, e, d).catch(C.XA);
                  }
                  n();
                },
                children: (0, a.jsx)(o.Modal, {
                  title: j.intl.string(j.t["5Q9+/L"]),
                  actions: [
                    {
                      text: j.intl.string(j.t["ETE/oC"]),
                      variant: "secondary",
                      onClick: r,
                    },
                    {
                      text: j.intl.string(j.t["R3BPH+"]),
                      variant: "primary",
                      type: "submit",
                      disabled: w === h && !R,
                    },
                  ],
                  onClose: () => Promise.resolve(r()),
                  transitionState: i,
                  children: (0, a.jsxs)("div", {
                    className: E.jE,
                    children: [
                      (0, a.jsx)(I, {
                        channel: u,
                        previewIcon: b,
                        onIconChange: (e) => k(e.imageUri),
                        onIconRemove: () => k(null),
                        analyticsLocations: N,
                      }),
                      (0, a.jsx)(m.k, {
                        "aria-label": j.intl.string(j.t.GEGW3P),
                        placeholder: x ?? "",
                        maxLength: f.Ign,
                        value: w,
                        onChange: T,
                        autoFocus: !0,
                      }),
                    ],
                  }),
                }),
              }),
            });
      };
    },
    396787(e, t, n) {
      n.d(t, { F5: () => h, XA: () => _, jv: () => m });
      var a = n(627968);
      n(64700);
      var l = n(653922),
        i = n(192308),
        s = n(157559),
        o = n(308528),
        c = n(793574),
        r = n(576470),
        d = n(339984),
        u = n(985018);
      let h = (e, t) =>
          (0, i.openModalLazy)(async () => {
            let { default: l } = await Promise.all([
              n.e("69668"),
              n.e("73873"),
              n.e("63232"),
              n.e("29666"),
              n.e("80436"),
              n.e("93513"),
              n.e("47011"),
              n.e("79149"),
              n.e("90017"),
              n.e("99150"),
              n.e("60987"),
            ]).then(n.bind(n, 902550));
            return (n) =>
              (0, a.jsx)(l, {
                maxFileSizeBytes: 8388608,
                onComplete: e,
                uploadType: d.HL.AVATAR,
                showUpsellHeader: !1,
                modalTitle: u.intl.string(u.t["6yrpFR"]),
                analyticsLocation: c.A.GROUP_DM_ICON_EDITOR,
                analyticsLocations: t,
                allowRecentAvatarsSelection: !1,
                ...n,
              });
          }),
        m = (e, t) => {
          h(
            (n) => {
              o.A.setIcon(e, n.imageUri, t).catch(_);
            },
            [t],
          );
        },
        _ = (e) => {
          if (e?.body?.retry_after != null) {
            let t = (0, l.A)(new Date(), e.body.retry_after);
            s.A.show({
              title: u.intl.string(u.t.Whhv4w),
              body: u.intl.format(u.t.VIJkAy, {
                duration: (0, a.jsx)(r.A, { showUnits: !0, deadline: t }),
              }),
            });
          }
        };
    },
  },
]);
//# sourceMappingURL=42455.daf476ce25c7168e.js.map
