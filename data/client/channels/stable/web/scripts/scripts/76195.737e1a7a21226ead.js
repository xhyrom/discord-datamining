"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["76195"],
  {
    940622(e, t, r) {
      r.d(t, {
        C: () => p,
        JE: () => v,
        NE: () => u,
        VU: () => b,
        mb: () => A,
      }),
        r(323874),
        r(14289),
        r(35956);
      var s = r(64700),
        a = r(735438),
        l = r(353640),
        o = r(121894),
        n = r(816866),
        c = r(87558),
        i = r(559474);
      let v = (0, l.v)((e) => ({
          previewEnabled: !1,
          collectionAssets: {},
          avatarDecorationAssets: {},
          previewProfileEffectSkuId: null,
          previewAvatarDecorationKey: null,
          heroLogoMaxHeight: null,
          heroResponsive: !1,
          setPreviewEnabled: (t) => e({ previewEnabled: t }),
          setHeroLogoMaxHeight: (t) => e({ heroLogoMaxHeight: t }),
          setHeroResponsive: (t) => e({ heroResponsive: t }),
          upsertCollectionAsset: (t, r) =>
            (0, o.r)(() => {
              e((e) => {
                let s = e.collectionAssets[t];
                null != s && URL.revokeObjectURL(s.src);
                let a = URL.createObjectURL(r),
                  l = { ...e.collectionAssets };
                return (
                  (l[t] = { type: t, name: r.name, src: a }),
                  { ...e, collectionAssets: l, previewEnabled: !0 }
                );
              });
            }),
          deleteCollectionAsset: (t) =>
            (0, o.r)(() => {
              e((e) => {
                let r = e.collectionAssets[t];
                if (null == r) return e;
                URL.revokeObjectURL(r.src);
                let { [t]: s, ...a } = e.collectionAssets,
                  l =
                    Object.keys(a).length > 0 ||
                    Object.keys(e.avatarDecorationAssets).length > 0;
                return { ...e, collectionAssets: a, previewEnabled: l };
              });
            }),
          upsertAvatarDecorationAsset: (t) =>
            (0, o.r)(() => {
              e((e) => {
                let r = e.avatarDecorationAssets[t.name];
                null != r && URL.revokeObjectURL(r.src);
                let s = URL.createObjectURL(t),
                  a = { ...e.avatarDecorationAssets };
                return (
                  (a[t.name] = {
                    type: i.Jn.AVATAR_DECORATION,
                    name: t.name,
                    src: s,
                  }),
                  { ...e, avatarDecorationAssets: a, previewEnabled: !0 }
                );
              });
            }),
          deleteAvatarDecorationAsset: (t) =>
            (0, o.r)(() => {
              e((e) => {
                let r = e.avatarDecorationAssets[t];
                if (null == r) return e;
                URL.revokeObjectURL(r.src);
                let { [t]: s, ...a } = e.avatarDecorationAssets,
                  l =
                    Object.keys(a).length > 0 ||
                    Object.keys(e.collectionAssets).length > 0;
                return { ...e, avatarDecorationAssets: a, previewEnabled: l };
              });
            }),
          clearAssets: () =>
            (0, o.r)(() => {
              e(
                (e) => (
                  Object.values(e.collectionAssets).forEach((e) =>
                    URL.revokeObjectURL(e.src),
                  ),
                  Object.values(e.avatarDecorationAssets).forEach((e) =>
                    URL.revokeObjectURL(e.src),
                  ),
                  {
                    collectionAssets: {},
                    avatarDecorationAssets: {},
                    previewEnabled: !1,
                    previewProfileEffectSkuId: null,
                    previewAvatarDecorationKey: null,
                    heroLogoMaxHeight: null,
                    heroResponsive: !1,
                  }
                ),
              );
            }),
          setPreviewProfileEffectSkuId: (t) =>
            (0, o.r)(() =>
              e({ previewProfileEffectSkuId: t, previewEnabled: null != t }),
            ),
          setPreviewAvatarDecorationKey: (t) =>
            (0, o.r)(() =>
              e({ previewAvatarDecorationKey: t, previewEnabled: null != t }),
            ),
        })),
        u = () => {
          let e = v((e) => e.collectionAssets),
            t = v((e) => e.avatarDecorationAssets);
          return s.useMemo(
            () => ({
              collectionAssets: Object.values(e).sort((e, t) =>
                e.name.localeCompare(t.name),
              ),
              avatarDecorationAssets: Object.values(t).sort((e, t) =>
                e.name.localeCompare(t.name),
              ),
            }),
            [e, t],
          );
        },
        A = (e) =>
          v((t) => (t.previewEnabled ? t.collectionAssets[e]?.src : null)),
        p = (e) => {
          let { previewEnabled: t, previewProfileEffectSkuId: r } = v(),
            l = (0, n.ZK)(t ? r : null);
          return s.useMemo(() => {
            if (null == l || null == e) return null;
            let { effects: t, stillFrames: r } = l,
              s = null != r && Object.keys(r).length > 0;
            if (0 === t.length && !s) return null;
            let o = (0, a.cloneDeep)(e);
            return (
              (o.title = l.name),
              (o.effects = t.map((e) => {
                let { base64: t, ...r } = e;
                return r;
              })),
              s &&
                ((o.reducedMotionSrc = r[c.qH.REDUCED_MOTION]?.src ?? ""),
                (o.staticFrameSrc = r[c.qH.STATIC]?.src ?? ""),
                (o.thumbnailPreviewSrc = r[c.qH.THUMBNAIL]?.src ?? "")),
              o
            );
          }, [l, e]);
        },
        b = () =>
          v((e) => {
            if (!e.previewEnabled) return null;
            let t = e.previewAvatarDecorationKey;
            if (null != t) return e.avatarDecorationAssets[t]?.src ?? null;
            let r = Object.values(e.avatarDecorationAssets);
            return r[0]?.src;
          });
    },
  },
]);
//# sourceMappingURL=76195.737e1a7a21226ead.js.map
