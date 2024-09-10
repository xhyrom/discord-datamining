"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["1812"],
  {
    117984: function (e, n, t) {
      t.d(n, {
        CM: function () {
          return E;
        },
        UT: function () {
          return h;
        },
        _Z: function () {
          return A;
        },
        kj: function () {
          return d;
        },
        oC: function () {
          return C;
        },
        s3: function () {
          return v;
        },
        uA: function () {
          return _;
        },
        xh: function () {
          return p;
        },
      }),
        t(47120);
      var i = t(524437),
        a = t(675478),
        o = t(592125),
        r = t(496675),
        s = t(709054),
        l = t(853856),
        u = t(231338);
      function f() {
        let e = l.Z.getFavoriteChannels(),
          n = 1;
        for (let t in e) n = Math.max(n, e[t].order);
        return n + 1;
      }
      function c(e) {
        for (let n in e) {
          let t = e[n];
          if (null == t) {
            delete e[n];
            continue;
          }
          if (t.type === i.Dd.CATEGORY) continue;
          let a = o.Z.getChannel(n);
          if (null == a) {
            delete e[n];
            continue;
          }
          if (!a.isPrivate()) {
            if (!r.Z.can(u.Pl.VIEW_CHANNEL, a)) {
              delete e[n];
              continue;
            }
          }
        }
      }
      function d(e, n) {
        if (!l.Z.isFavorite(e))
          a.hW.updateAsync(
            "favorites",
            (t) => {
              (t.favoriteChannels[e] = i.aV.create({
                nickname: "",
                type: i.Dd.REFERENCE_ORIGINAL,
                position: f(),
                parentId: null != n ? n : "0",
              })),
                c(t.favoriteChannels);
            },
            a.fy.FREQUENT_USER_ACTION,
          );
      }
      function C(e) {
        let n = l.Z.getFavorite(e);
        if (null != n)
          a.hW.updateAsync(
            "favorites",
            (t) => {
              if ((delete t.favoriteChannels[e], n.type === i.Dd.CATEGORY))
                for (let n in t.favoriteChannels)
                  t.favoriteChannels[n].parentId === e &&
                    (t.favoriteChannels[n].parentId = "0");
              c(t.favoriteChannels);
            },
            a.fy.INFREQUENT_USER_ACTION,
          );
      }
      function h(e, n) {
        if (!!l.Z.isFavorite(e))
          a.hW.updateAsync(
            "favorites",
            (t) => {
              t.favoriteChannels[e].nickname = null != n ? n : "";
            },
            a.fy.INFREQUENT_USER_ACTION,
          );
      }
      function E(e) {
        let n = s.default.fromTimestamp(Date.now());
        a.hW.updateAsync(
          "favorites",
          (t) => {
            t.favoriteChannels[n] = i.aV.create({
              nickname: e,
              type: i.Dd.CATEGORY,
              position: f(),
              parentId: "0",
            });
          },
          a.fy.FREQUENT_USER_ACTION,
        );
      }
      function p(e) {
        C(e);
      }
      function v(e) {
        a.hW.updateAsync(
          "favorites",
          (n) => {
            for (let i of e)
              if (
                (null != i.position &&
                  (n.favoriteChannels[i.id].position = i.position),
                void 0 !== i.parent_id)
              ) {
                var t;
                n.favoriteChannels[i.id].parentId =
                  null !== (t = i.parent_id) && void 0 !== t ? t : "0";
              }
          },
          a.fy.FREQUENT_USER_ACTION,
        );
      }
      function _(e, n) {
        a.hW.updateAsync(
          "favorites",
          (t) => {
            t.favoriteChannels[e].parentId = null != n ? n : "0";
          },
          a.fy.FREQUENT_USER_ACTION,
        );
      }
      function A() {
        a.hW.updateAsync(
          "favorites",
          (e) => {
            e.muted = !e.muted;
          },
          a.fy.INFREQUENT_USER_ACTION,
        );
      }
    },
    477782: function (e, n, t) {
      t.r(n),
        t.d(n, {
          default: function () {
            return f;
          },
        }),
        t(47120);
      var i = t(735250),
        a = t(470079),
        o = t(481060),
        r = t(313201),
        s = t(117984),
        l = t(689938),
        u = t(775539);
      function f(e) {
        let { onClose: n, transitionState: t } = e,
          f = (0, r.Dt)(),
          [c, d] = a.useState("");
        return (0, i.jsx)("form", {
          onSubmit: function (e) {
            e.preventDefault(), (0, s.CM)(c), n();
          },
          children: (0, i.jsxs)(o.ModalRoot, {
            transitionState: t,
            "aria-labelledby": f,
            children: [
              (0, i.jsxs)(o.ModalContent, {
                children: [
                  (0, i.jsx)(o.Heading, {
                    id: f,
                    className: u.header,
                    variant: "heading-xl/semibold",
                    children: l.Z.Messages.CREATE_CATEGORY,
                  }),
                  (0, i.jsx)(o.ModalCloseButton, {
                    onClick: n,
                    className: u.closeButton,
                  }),
                  (0, i.jsx)(o.FormItem, {
                    title: l.Z.Messages.CATEGORY_NAME,
                    className: u.name,
                    children: (0, i.jsx)(o.TextInput, {
                      value: c,
                      onChange: d,
                      maxLength: 100,
                      placeholder: l.Z.Messages.CATEGORY_NAME_PLACEHOLDER,
                      className: u.__invalid_inputWrapper,
                      autoFocus: !0,
                    }),
                  }),
                ],
              }),
              (0, i.jsxs)(o.ModalFooter, {
                children: [
                  (0, i.jsx)(o.Button, {
                    type: "submit",
                    disabled: "" === c,
                    children: l.Z.Messages.CREATE_CATEGORY,
                  }),
                  (0, i.jsx)(o.Button, {
                    onClick: n,
                    look: o.Button.Looks.LINK,
                    color: o.Button.Colors.PRIMARY,
                    children: l.Z.Messages.CANCEL,
                  }),
                ],
              }),
            ],
          }),
        });
      }
    },
    775539: function (e, n, t) {
      e.exports = {
        closeButton: "closeButton_dcf388",
        header: "header_dcf388",
        name: "name_dcf388",
      };
    },
  },
]);
//# sourceMappingURL=1e7e54fc0cfb3ad0ea45.js.map
