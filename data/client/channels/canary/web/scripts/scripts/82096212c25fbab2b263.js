"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["1812"],
  {
    117984: function (n, t, e) {
      e.d(t, {
        CM: function () {
          return C;
        },
        UT: function () {
          return p;
        },
        _Z: function () {
          return _;
        },
        kj: function () {
          return d;
        },
        oC: function () {
          return h;
        },
        s3: function () {
          return E;
        },
        uA: function () {
          return N;
        },
        xh: function () {
          return v;
        },
      }),
        e(47120);
      var i = e(524437),
        o = e(675478),
        a = e(592125),
        r = e(496675),
        l = e(709054),
        s = e(853856),
        u = e(231338);
      function f() {
        let n = s.Z.getFavoriteChannels(),
          t = 1;
        for (let e in n) t = Math.max(t, n[e].order);
        return t + 1;
      }
      function c(n) {
        for (let t in n) {
          let e = n[t];
          if (null == e) {
            delete n[t];
            continue;
          }
          if (e.type === i.Dd.CATEGORY) continue;
          let o = a.Z.getChannel(t);
          if (null == o) {
            delete n[t];
            continue;
          }
          if (!o.isPrivate()) {
            if (!r.Z.can(u.Pl.VIEW_CHANNEL, o)) {
              delete n[t];
              continue;
            }
          }
        }
      }
      function d(n, t) {
        if (!s.Z.isFavorite(n))
          o.hW.updateAsync(
            "favorites",
            (e) => {
              (e.favoriteChannels[n] = i.aV.create({
                nickname: "",
                type: i.Dd.REFERENCE_ORIGINAL,
                position: f(),
                parentId: null != t ? t : "0",
              })),
                c(e.favoriteChannels);
            },
            o.fy.FREQUENT_USER_ACTION,
          );
      }
      function h(n) {
        let t = s.Z.getFavorite(n);
        if (null != t)
          o.hW.updateAsync(
            "favorites",
            (e) => {
              if ((delete e.favoriteChannels[n], t.type === i.Dd.CATEGORY))
                for (let t in e.favoriteChannels)
                  e.favoriteChannels[t].parentId === n &&
                    (e.favoriteChannels[t].parentId = "0");
              c(e.favoriteChannels);
            },
            o.fy.INFREQUENT_USER_ACTION,
          );
      }
      function p(n, t) {
        if (!!s.Z.isFavorite(n))
          o.hW.updateAsync(
            "favorites",
            (e) => {
              e.favoriteChannels[n].nickname = null != t ? t : "";
            },
            o.fy.INFREQUENT_USER_ACTION,
          );
      }
      function C(n) {
        let t = l.default.fromTimestamp(Date.now());
        o.hW.updateAsync(
          "favorites",
          (e) => {
            e.favoriteChannels[t] = i.aV.create({
              nickname: n,
              type: i.Dd.CATEGORY,
              position: f(),
              parentId: "0",
            });
          },
          o.fy.FREQUENT_USER_ACTION,
        );
      }
      function v(n) {
        h(n);
      }
      function E(n) {
        o.hW.updateAsync(
          "favorites",
          (t) => {
            for (let i of n)
              if (
                (null != i.position &&
                  (t.favoriteChannels[i.id].position = i.position),
                void 0 !== i.parent_id)
              ) {
                var e;
                t.favoriteChannels[i.id].parentId =
                  null !== (e = i.parent_id) && void 0 !== e ? e : "0";
              }
          },
          o.fy.FREQUENT_USER_ACTION,
        );
      }
      function N(n, t) {
        o.hW.updateAsync(
          "favorites",
          (e) => {
            e.favoriteChannels[n].parentId = null != t ? t : "0";
          },
          o.fy.FREQUENT_USER_ACTION,
        );
      }
      function _() {
        o.hW.updateAsync(
          "favorites",
          (n) => {
            n.muted = !n.muted;
          },
          o.fy.INFREQUENT_USER_ACTION,
        );
      }
    },
    477782: function (n, t, e) {
      e.r(t),
        e.d(t, {
          default: function () {
            return f;
          },
        }),
        e(47120);
      var i = e(200651),
        o = e(192379),
        a = e(481060),
        r = e(313201),
        l = e(117984),
        s = e(388032),
        u = e(116576);
      function f(n) {
        let { onClose: t, transitionState: e } = n,
          f = (0, r.Dt)(),
          [c, d] = o.useState("");
        return (0, i.jsx)("form", {
          onSubmit: function (n) {
            n.preventDefault(), (0, l.CM)(c), t();
          },
          children: (0, i.jsxs)(a.ModalRoot, {
            transitionState: e,
            "aria-labelledby": f,
            children: [
              (0, i.jsxs)(a.ModalContent, {
                children: [
                  (0, i.jsx)(a.Heading, {
                    id: f,
                    className: u.header,
                    variant: "heading-xl/semibold",
                    children: s.intl.string(s.t["ISN+ND"]),
                  }),
                  (0, i.jsx)(a.ModalCloseButton, {
                    onClick: t,
                    className: u.closeButton,
                  }),
                  (0, i.jsx)(a.FormItem, {
                    title: s.intl.string(s.t.OCAkGB),
                    className: u.name,
                    children: (0, i.jsx)(a.TextInput, {
                      value: c,
                      onChange: d,
                      maxLength: 100,
                      placeholder: s.intl.string(s.t.eTVbt7),
                      className: u.__invalid_inputWrapper,
                      autoFocus: !0,
                    }),
                  }),
                ],
              }),
              (0, i.jsxs)(a.ModalFooter, {
                children: [
                  (0, i.jsx)(a.Button, {
                    type: "submit",
                    disabled: "" === c,
                    children: s.intl.string(s.t["ISN+ND"]),
                  }),
                  (0, i.jsx)(a.Button, {
                    onClick: t,
                    look: a.Button.Looks.LINK,
                    color: a.Button.Colors.PRIMARY,
                    children: s.intl.string(s.t["ETE/oK"]),
                  }),
                ],
              }),
            ],
          }),
        });
      }
    },
    116576: function (n, t, e) {
      n.exports = {
        closeButton: "closeButton_dcf388",
        header: "header_dcf388",
        name: "name_dcf388",
      };
    },
  },
]);
//# sourceMappingURL=82096212c25fbab2b263.js.map
