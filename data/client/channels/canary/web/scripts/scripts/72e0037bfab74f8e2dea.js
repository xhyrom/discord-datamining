"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["38536"],
  {
    384275: function (e, t, n) {
      var r = n(544891),
        o = n(570140),
        s = n(981631);
      t.Z = {
        fetch() {
          r.tn.get({ url: s.ANM.OAUTH2_TOKENS, oldFormErrors: !0 }).then(
            (e) =>
              o.Z.dispatch({
                type: "USER_AUTHORIZED_APPS_UPDATE",
                apps: e.body,
              }),
            () =>
              o.Z.dispatch({ type: "USER_AUTHORIZED_APPS_UPDATE", apps: [] }),
          );
        },
        delete(e) {
          r.tn
            .del({ url: s.ANM.OAUTH2_TOKEN(e), oldFormErrors: !0 })
            .then(() => {
              this.fetch();
            });
        },
      };
    },
    147865: function (e, t, n) {
      n.d(t, {
        ZP: function () {
          return o;
        },
        lY: function () {
          return s;
        },
      });
      var r = n(689938);
      function o(e) {
        return e > 0
          ? r.Z.Messages.EMBEDDED_ACTIVITIES_MAX_PARTICIPANTS.format({
              count: e,
            })
          : r.Z.Messages.EMBEDDED_ACTIVITIES_UNLIMITED_PARTICIPANTS;
      }
      function s(e) {
        return e > 0
          ? "1-".concat(e)
          : r.Z.Messages.EMBEDDED_ACTIVITIES_UNLIMITED_PARTICIPANTS_SHORT;
      }
    },
    778569: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return a;
        },
      }),
        n(47120);
      var r = n(470079),
        o = n(81063);
      let s = ["embedded_cover", "embedded_background"];
      function a(e) {
        let { applicationId: t, size: n, names: a = s } = e,
          [u, i] = r.useState(null),
          [c, l] = r.useState(!0),
          d = (0, o.getAssetImage)(t, u, n);
        return (
          r.useEffect(() => {
            (0, o.getAssets)(t).then((e) => {
              for (let [t, n] of (l(!1), Object.entries(e)))
                if (null != n && "" !== n.id && a.includes(n.name)) {
                  i(n.id);
                  return;
                }
            });
          }, [t]),
          { url: d, state: c ? "loading" : null != d ? "fetched" : "not-found" }
        );
      }
    },
    182906: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return u;
        },
      }),
        n(47120);
      var r = n(735250),
        o = n(470079),
        s = n(558522),
        a = n(175778);
      function u(e) {
        let {
            imageBackground: t,
            applicationName: n,
            imageClassName: u,
            imageNotFoundClassName: i,
          } = e,
          [c, l] = o.useState(!1);
        return "not-found" === t.state || c
          ? (0, r.jsx)("div", {
              className: i,
              children: (0, r.jsx)(s.Z, { className: a.brokenImageIcon }),
            })
          : "loading" === t.state
            ? null
            : (0, r.jsx)("img", {
                alt: n,
                className: u,
                src: t.url,
                onError: () => l(!0),
              });
      }
    },
    743161: function (e, t, n) {
      n.r(t);
      var r = n(735250),
        o = n(470079),
        s = n(442837),
        a = n(481060),
        u = n(541099),
        i = n(827498),
        c = n(421591),
        l = n(314734),
        d = n(689938),
        f = n(551397);
      t.default = o.memo(function (e) {
        let { channel: t, ...n } = e,
          E = (0, s.e7)([u.Z], () => u.Z.shouldShowModal());
        return (
          o.useEffect(() => {
            !E && (0, a.closeModal)(l.e9);
          }),
          (0, r.jsx)("span", {
            style: l.u$,
            children: (0, r.jsx)(a.ModalRoot, {
              className: f.root,
              "aria-label": d.Z.Messages.EMBEDDED_ACTIVITIES_SHELF_TITLE,
              ...n,
              children: (0, r.jsx)(c.Z, { channel: t, entrypoint: i._b.VOICE }),
            }),
          })
        );
      });
    },
    881998: function (e, t, n) {
      var r,
        o,
        s,
        a,
        u = n(442837),
        i = n(570140),
        c = n(592125),
        l = n(757266),
        d = n(375954);
      let f = null;
      class E extends (a = u.ZP.Store) {
        initialize() {
          this.waitFor(c.Z, l.Z, d.Z);
        }
        getApps() {
          return f;
        }
      }
      (s = "AuthorizedAppsStore"),
        (o = "displayName") in (r = E)
          ? Object.defineProperty(r, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (r[o] = s),
        (t.Z = new E(i.Z, {
          USER_AUTHORIZED_APPS_UPDATE: function (e) {
            f = e.apps;
          },
        }));
    },
    558522: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return s;
        },
      });
      var r = n(735250);
      n(470079);
      var o = n(325767);
      function s(e) {
        let {
          width: t = 24,
          height: n = 24,
          color: s = "currentColor",
          foreground: a,
          ...u
        } = e;
        return (0, r.jsx)("svg", {
          ...(0, o.Z)(u),
          width: t,
          height: n,
          viewBox: "0 0 24 24",
          children: (0, r.jsx)("path", {
            className: a,
            fill: s,
            d: "M21 5V11.59L18 8.59L14 12.59L10 8.59L6 12.59L3 9.59V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5ZM18 11.42L21 14.42V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V12.42L6 15.42L10 11.42L14 15.42L18 11.42Z",
          }),
        });
      }
    },
    175778: function (e, t, n) {
      e.exports = { brokenImageIcon: "brokenImageIcon_b88265" };
    },
    551397: function (e, t, n) {
      e.exports = { root: "root_ebf21e" };
    },
  },
]);
//# sourceMappingURL=72e0037bfab74f8e2dea.js.map
