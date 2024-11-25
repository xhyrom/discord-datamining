"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["53900"],
  {
    697730: function (e) {
      e.exports = "/assets/78838df442e8fac417df.svg";
    },
    645792: function (e, t, n) {
      n.d(t, {
        b: function () {
          return r;
        },
      });
      let o = (0, n(818083).B)({
        kind: "user",
        id: "2022-08_back_to_school",
        label: "Back to School Event",
        defaultConfig: { enabled: !1 },
        treatments: [
          {
            id: 1,
            label: "Back to School experience enabled",
            config: { enabled: !0 },
          },
        ],
      });
      function r() {
        return o.getCurrentConfig(
          { location: "68acbb_1" },
          { autoTrackExposure: !1 },
        ).enabled;
      }
      t.Z = o;
    },
    784280: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return x;
          },
        }),
        n(47120);
      var o = n(200651),
        r = n(192379),
        a = n(442837),
        i = n(481060),
        l = n(881052),
        s = n(607070),
        d = n(745510),
        c = n(600164),
        u = n(781792),
        f = n(430824),
        m = n(645792),
        b = n(981631),
        h = n(388032),
        g = n(850961);
      function x(e) {
        let { guildId: t } = e,
          n = (0, a.e7)([f.Z], () => f.Z.getGuild(t)),
          [x, p] = r.useState(null),
          [C, v] = r.useState(""),
          { createMultipleConfettiAt: H } = r.useContext(d.h),
          _ = (0, a.e7)([s.Z], () => s.Z.useReducedMotion, []),
          N = async (t) => {
            let { onClose: n, guildId: o } = e;
            t.preventDefault(), p(null);
            try {
              await (0, u.e)(o, { nick: C }), null == n || n();
            } catch (e) {
              p(new l.Hx(e));
            }
          },
          { transitionState: j } = e,
          k =
            Object.values(f.Z.getGuilds()).filter(
              (e) => e.id !== t && e.hasFeature(b.oNc.HUB),
            ).length > 0,
          S =
            !_ &&
            !k &&
            (null == n ? void 0 : n.hasFeature(b.oNc.HUB)) &&
            (0, m.b)();
        return (
          r.useEffect(() => {
            if (S) {
              let e = window.innerWidth / 2;
              H(e, window.innerHeight / 2);
            }
          }, [H, S]),
          (0, o.jsxs)(i.ModalRoot, {
            className: g.__invalid_modalRoot,
            transitionState: j,
            "aria-label": h.intl.formatToPlainString(h.t["d+6kzs"], {
              guildName: null == n ? void 0 : n.name,
            }),
            children: [
              (0, o.jsxs)(i.ModalHeader, {
                separator: !1,
                className: g.formHeaderContainer,
                direction: c.Z.Direction.VERTICAL,
                children: [
                  (0, o.jsx)("div", { className: g.formImage }),
                  (0, o.jsx)(i.Heading, {
                    variant: "heading-xl/semibold",
                    className: g.formHeader,
                    children: h.intl.format(h.t["d+6kzs"], {
                      guildName: null == n ? void 0 : n.name,
                    }),
                  }),
                  (0, o.jsx)(i.Text, {
                    color: "header-secondary",
                    variant: "text-sm/normal",
                    className: g.formSubHeader,
                    children: h.intl.string(h.t.b3L8y8),
                  }),
                ],
              }),
              (0, o.jsxs)("form", {
                className: g.formContent,
                onSubmit: N,
                children: [
                  (0, o.jsx)(i.ModalContent, {
                    children: (0, o.jsx)(i.FormItem, {
                      title: h.intl.string(h.t.ilDlmZ),
                      children: (0, o.jsx)(i.TextInput, {
                        placeholder: h.intl.string(h.t.RfWvWF),
                        onChange: (e) => {
                          v(e);
                        },
                        error:
                          null == x
                            ? void 0
                            : x.getFirstFieldErrorMessage("name"),
                        value: C,
                      }),
                    }),
                  }),
                  (0, o.jsx)(i.ModalFooter, {
                    className: g.formFooter,
                    direction: c.Z.Direction.VERTICAL,
                    children: (0, o.jsx)(i.Button, {
                      type: "submit",
                      size: i.Button.Sizes.LARGE,
                      color: i.Button.Colors.BRAND,
                      children: h.intl.string(h.t.Np4yXV),
                    }),
                  }),
                ],
              }),
            ],
          })
        );
      }
    },
    850961: function (e, t, n) {
      e.exports = {
        formHeaderContainer: "formHeaderContainer_bacf97",
        formContent: "formContent_bacf97",
        formFooter: "formFooter_bacf97",
        formImage: "formImage_bacf97",
        formSubHeader: "formSubHeader_bacf97",
        formHeader: "formHeader_bacf97",
      };
    },
  },
]);
//# sourceMappingURL=6a89054eeb46282dbc37.js.map
