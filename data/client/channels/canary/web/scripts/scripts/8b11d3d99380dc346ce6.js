"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["83051"],
  {
    223356: function (e, t, n) {
      n.d(t, {
        Tj: function () {
          return m;
        },
        WG: function () {
          return d;
        },
        ZD: function () {
          return h;
        },
        pD: function () {
          return c;
        },
      }),
        n(653041);
      var i = n(990547);
      n(804098);
      var r = n(544891),
        l = n(729345),
        o = n(210887);
      n(358085);
      var a = n(573261),
        s = n(981631),
        u = n(388032);
      async function d() {
        return (await r.tn.get({ url: s.ANM.BUG_REPORTS, rejectWithError: !1 }))
          .body;
      }
      function c(e) {
        var t, n;
        return null !==
          (n =
            null !== (t = null == e ? void 0 : e.name) && void 0 !== t
              ? t
              : "" + (null == e ? void 0 : e.squad)) && void 0 !== n
          ? n
          : "";
      }
      function m() {
        return [
          {
            title: u.intl.string(u.t.VwIij4),
            description: u.intl.format(u.t.DOP8yc, {}),
            emoji: "801497159479722084",
            value: 0,
          },
          {
            title: u.intl.string(u.t.rYfJoq),
            description: u.intl.format(u.t["+LEfDA"], {}),
            emoji: "410336837563973632",
            value: 1,
          },
          {
            title: u.intl.string(u.t.Ia0skZ),
            description: u.intl.format(u.t.D4rbgY, {}),
            emoji: "841420679643529296",
            value: 2,
          },
          {
            title: u.intl.string(u.t.KGsyFx),
            description: u.intl.format(u.t.Kmg64O, {}),
            emoji: "827645852352512021",
            value: 3,
          },
        ];
      }
      async function h(e, t, n) {
        var r, u;
        let d = [
          { name: "name", value: e.name },
          { name: "priority", value: "".concat(e.priority) },
          {
            name: "override_platform_information",
            value: "".concat(t.overridePlatformInformation),
          },
          { name: "theme", value: o.Z.theme },
        ];
        "" !== e.description &&
          d.push({ name: "description", value: e.description }),
          "" !== e.url && d.push({ name: "external_url", value: e.url }),
          null != e.buildOverride &&
            d.push({ name: "build_override", value: e.buildOverride });
        let c =
          null === (r = e.feature) || void 0 === r ? void 0 : r.asana_inbox_id;
        null != c &&
          "" !== c &&
          d.push({ name: "asana_inbox_id", value: "".concat(c) });
        let m = null === (u = e.feature) || void 0 === u ? void 0 : u.name;
        null != m && "" !== m && d.push({ name: "feature_name", value: m }),
          t.overridePlatformInformation &&
            (d.push({ name: "device", value: t.device }),
            d.push({ name: "os", value: t.operatingSystem }),
            d.push({ name: "os_version", value: t.operatingSystemVersion }),
            d.push({ name: "client_version", value: t.clientVersion }),
            d.push({ name: "client_build_number", value: t.clientBuildNumber }),
            d.push({
              name: "release_channel",
              value: window.GLOBAL_ENV.RELEASE_CHANNEL,
            }),
            d.push({ name: "locale", value: t.locale })),
          (0, l.E)(s.GU0.WEB_APP);
        try {
          return await a.Z.post({
            url: s.ANM.BUG_REPORTS,
            attachments: n,
            fields: d,
            trackedActionData: {
              event: i.NetworkActionNames.BUG_REPORT_SUBMIT,
              properties: { priority: e.priority, asana_inbox_id: c },
            },
            rejectWithError: !1,
          });
        } catch (e) {
          return e;
        }
      }
    },
    225452: function (e, t, n) {
      n.d(t, {
        D: function () {
          return i;
        },
      });
      function i(e) {
        return e.map((e, t) => {
          var n, i;
          return {
            file: e.file,
            name:
              null !== (i = e.id) && void 0 !== i ? i : "attachment_".concat(t),
            filename: null === (n = e.file) || void 0 === n ? void 0 : n.name,
          };
        });
      }
    },
    115072: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return I;
          },
        }),
        n(47120);
      var i = n(200651),
        r = n(192379),
        l = n(772848),
        o = n(442837),
        a = n(544891),
        s = n(481060),
        u = n(53281),
        d = n(476326),
        c = n(304761),
        m = n(273031),
        h = n(859235),
        v = n(898463),
        x = n(951394),
        p = n(594174),
        f = n(768581),
        g = n(358085),
        j = n(223356),
        y = n(225452),
        S = n(388032),
        b = n(418421);
      let C = [
        "Android",
        "iOS",
        "Windows Mobile",
        "Windows",
        "Linux",
        "Mac OS X",
      ].map((e) => ({ label: e, value: e }));
      function I(e) {
        var t, I, T, _, E;
        let { transitionState: w, onClose: P } = e,
          N = r.useRef(null),
          k = r.useRef(null),
          [A, F] = r.useState(""),
          [O, L] = r.useState(""),
          [R, M] = r.useState(),
          [D, B] = r.useState(""),
          [V, W] = r.useState([]),
          [Z, G] = r.useState(),
          [H, z] = r.useState(),
          [q, U] = r.useState(!1),
          [Y, X] = r.useState(""),
          [K, J] = r.useState(
            (function (e) {
              switch (e) {
                case "windows":
                  return "Windows";
                case "macos":
                  return "Mac OS X";
                case "linux":
                  return "Linux";
              }
              return "";
            })((0, g.getOS)()),
          ),
          [Q, $] = r.useState(""),
          [ee, et] = r.useState(""),
          [en, ei] = r.useState(""),
          [er, el] = r.useState(""),
          [eo, ea] = r.useState(!1),
          [es, eu] = r.useState(!1),
          [ed, ec] = r.useState(!1),
          [em, eh] = r.useState(!1);
        r.useEffect(() => {
          let e = Math.random().toString(16).slice(2);
          a.tn
            .get({
              url: ""
                .concat(location.protocol, "//")
                .concat(location.host)
                .concat("/assets/", "version.")
                .concat(window.GLOBAL_ENV.RELEASE_CHANNEL, ".json"),
              query: { cache: e },
              rejectWithError: !0,
            })
            .then((e) => {
              if (
                null != e.body &&
                "381ee8aa1c40707685aa0d4ab02f65406e054bed" !== e.body.hash
              )
                eh(!0);
            });
        }, []);
        let ev = (0, o.e7)([p.default], () => {
            let e = p.default.getCurrentUser();
            return (
              (null == e ? void 0 : e.isStaff()) ||
              (null == e ? void 0 : e.isStaffPersonal())
            );
          }),
          ex = (0, o.e7)([c.C], () => {
            var e;
            return null === (e = c.C.getCurrentBuildOverride().overrides) ||
              void 0 === e
              ? void 0
              : e.discord_web;
          }),
          ep = () => {
            null == P || P();
          },
          ef = (e) => {
            W(V.filter((t) => t.id !== e));
          };
        async function eg() {
          var e, t;
          if ((ec(!1), "" === A || null == R)) {
            ea(!0);
            return;
          }
          let r =
            null == Z
              ? void 0
              : null === (e = Z.features) || void 0 === e
                ? void 0
                : e.find((e) => (0, j.pD)(e) === H);
          eu(!0), ea(!1);
          let l = (0, y.D)(
              V.map((e) => {
                let { item: t } = e;
                return t;
              }),
            ),
            o =
              !0 === q
                ? {
                    overridePlatformInformation: q,
                    device: Y,
                    operatingSystem: K,
                    operatingSystemVersion: Q,
                    clientVersion: ee,
                    clientBuildNumber: en,
                    locale: er,
                  }
                : { overridePlatformInformation: q },
            a = await (0, j.ZD)(
              {
                name: A,
                description: O,
                priority: R,
                feature: r,
                url: D,
                buildOverride:
                  null !== (t = null == ex ? void 0 : ex.id) && void 0 !== t
                    ? t
                    : null,
              },
              o,
              l,
            ).catch(() => ec(!0));
          eu(!1),
            null != a && a.ok
              ? (ev && window.open(a.body.permalink_url, "_blank"),
                ep(),
                (0, s.openModalLazy)(async () => {
                  let { default: e } = await n
                    .e("64648")
                    .then(n.bind(n, 81155));
                  return (t) => (0, i.jsx)(e, { ...t, asanaTask: a.body });
                }))
              : ec(!0);
        }
        return (
          r.useEffect(() => {
            async function e() {
              G(await (0, j.WG)());
            }
            ev && e();
          }, [ev]),
          r.useEffect(() => {
            if (V.length > 0) {
              var e;
              null === (e = k.current) ||
                void 0 === e ||
                e.scrollIntoView({ behavior: "smooth", block: "end" });
            }
          }, [V]),
          (0, i.jsxs)(s.ModalRoot, {
            transitionState: w,
            "aria-label": S.intl.string(S.t.mCCdws),
            size: s.ModalSize.MEDIUM,
            children: [
              (0, i.jsx)(s.ModalHeader, {
                children: (0, i.jsx)(s.Heading, {
                  variant: "heading-lg/semibold",
                  children: (0, i.jsx)(s.H, {
                    children: S.intl.string(S.t["5Lqopa"]),
                  }),
                }),
              }),
              (0, i.jsx)(s.ModalContent, {
                children: (0, i.jsxs)("form", {
                  onSubmit: eg,
                  children: [
                    null != ex &&
                      (0, i.jsx)(s.FormNotice, {
                        type: s.FormNotice.Types.WARNING,
                        body: S.intl.format(S.t["yY60+/"], {
                          buildOverrideHook: () =>
                            (0, i.jsx)("b", {
                              children: null == ex ? void 0 : ex.id,
                            }),
                        }),
                        title: S.intl.string(S.t["ZP/hEx"]),
                      }),
                    null == ex &&
                      em &&
                      (0, i.jsx)(s.FormNotice, {
                        type: s.FormNotice.Types.WARNING,
                        body: S.intl.string(S.t.x18RUl),
                        title: S.intl.string(S.t.cTVCIC),
                      }),
                    (0, i.jsxs)(s.Stack, {
                      gap: 24,
                      padding: { top: 8, bottom: 8 },
                      children: [
                        (0, i.jsx)(s.FormItem, {
                          error:
                            eo && "" === A ? S.intl.string(S.t.EkokLy) : null,
                          title: S.intl.string(S.t.OZRgj4),
                          children: (0, i.jsx)(s.TextInput, {
                            placeholder: "Something is broken on this screen.",
                            type: "text",
                            value: A,
                            maxLength: 100,
                            onChange: F,
                          }),
                        }),
                        (0, i.jsxs)(s.FormItem, {
                          title: S.intl.string(S.t["1SplHx"]),
                          children: [
                            (0, i.jsx)(s.TextArea, {
                              placeholder: "What did you expect to see?",
                              value: O,
                              onChange: L,
                            }),
                            (0, i.jsx)(s.FormText, {
                              type: s.FormTextTypes.DESCRIPTION,
                              children:
                                "You can add additional information/media on the ticket after submitting",
                            }),
                          ],
                        }),
                        (0, i.jsx)(s.FormItem, {
                          error:
                            eo && void 0 === R
                              ? S.intl.string(S.t.EkokLy)
                              : null,
                          title: S.intl.string(S.t.xMXLdX),
                          children: (0, i.jsx)(s.SingleSelect, {
                            renderOptionLabel: (e) =>
                              (function (e) {
                                let t = e.priority;
                                return (0, i.jsxs)("div", {
                                  className: b.formPriorityImageContainer,
                                  children: [
                                    (0, i.jsxs)("div", {
                                      className: b.formPriorityTitleContainer,
                                      children: [
                                        (0, i.jsx)("img", {
                                          alt: "",
                                          className: b.formPriorityImage,
                                          src: (0, f.gT)({
                                            id: t.emoji,
                                            animated: !0,
                                            size: 48,
                                          }),
                                        }),
                                        (0, i.jsx)(s.Text, {
                                          color: "header-primary",
                                          variant: "text-sm/semibold",
                                          className: b.formPriorityTitle,
                                          children: t.title,
                                        }),
                                      ],
                                    }),
                                    (0, i.jsx)(s.Text, {
                                      color: "header-secondary",
                                      variant: "text-xs/normal",
                                      className: b.formPriorityDescription,
                                      children: t.description,
                                    }),
                                  ],
                                });
                              })(e),
                            onChange: M,
                            options: (0, j.Tj)().map((e) => ({
                              priority: e,
                              value: e.value,
                              label: e.title,
                            })),
                            value: R,
                            maxVisibleItems: 3,
                            closeOnSelect: !0,
                          }),
                        }),
                        ev &&
                          (0, i.jsx)(s.FormItem, {
                            title: S.intl.string(S.t["77VVd3"]),
                            children: (0, i.jsx)(s.SearchableSelect, {
                              value: H,
                              options:
                                null !==
                                  (E =
                                    null == (t = Z)
                                      ? void 0
                                      : null === (_ = t.features) ||
                                          void 0 === _
                                        ? void 0
                                        : null ===
                                              (T = _.filter(
                                                (e) => "" !== (0, j.pD)(e),
                                              )) || void 0 === T
                                          ? void 0
                                          : null ===
                                                (I = T.map((e) => {
                                                  var t;
                                                  return {
                                                    label:
                                                      null !== (t = e.name) &&
                                                      void 0 !== t
                                                        ? t
                                                        : "",
                                                    value: (0, j.pD)(e),
                                                  };
                                                })) || void 0 === I
                                            ? void 0
                                            : I.sort((e, t) =>
                                                e.label.localeCompare(t.label),
                                              )) && void 0 !== E
                                  ? E
                                  : [],
                              isDisabled: null == Z,
                              onChange: (e) => z(e),
                            }),
                          }),
                        (0, i.jsx)(s.FormItem, {
                          title: S.intl.string(S.t["7p5pqq"]),
                          children: (0, i.jsx)(s.TextInput, {
                            placeholder: S.intl.string(S.t.HewMzs),
                            type: "text",
                            value: D,
                            maxLength: 5e3,
                            onChange: B,
                          }),
                        }),
                        (0, i.jsx)(s.FormItem, {
                          children: (0, i.jsx)(s.Checkbox, {
                            value: q,
                            onChange: (e, t) => U(t),
                            children: S.intl.string(S.t.ayhqiI),
                          }),
                        }),
                        q
                          ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                (0, i.jsx)(s.FormItem, {
                                  title: S.intl.string(S.t.rrI4Tk),
                                  children: (0, i.jsx)(s.TextInput, {
                                    placeholder: "Device",
                                    value: Y,
                                    onChange: (e) => X(e),
                                  }),
                                }),
                                (0, i.jsx)(s.FormItem, {
                                  title: S.intl.string(S.t.kcHxi4),
                                  children: (0, i.jsx)(s.SingleSelect, {
                                    value: K,
                                    options: C,
                                    onChange: (e) => J(e),
                                  }),
                                }),
                                (0, i.jsx)(s.FormItem, {
                                  title: S.intl.string(S.t.rEtxdn),
                                  children: (0, i.jsx)(s.TextInput, {
                                    placeholder: "Operating System Version",
                                    value: Q,
                                    onChange: (e) => $(e),
                                  }),
                                }),
                                (0, i.jsx)(s.FormItem, {
                                  title: S.intl.string(S.t["wy1M/v"]),
                                  children: (0, i.jsx)(s.TextInput, {
                                    placeholder: "Client Version",
                                    value: ee,
                                    onChange: (e) => et(e),
                                  }),
                                }),
                                (0, i.jsx)(s.FormItem, {
                                  title: S.intl.string(S.t.f7kbVl),
                                  children: (0, i.jsx)(s.TextInput, {
                                    placeholder: "Client Build Number",
                                    value: en,
                                    onChange: (e) => ei(e),
                                  }),
                                }),
                                (0, i.jsx)(s.FormItem, {
                                  title: S.intl.string(S.t["4Z5+zs"]),
                                  children: (0, i.jsx)(s.TextInput, {
                                    placeholder: "Locale",
                                    value: er,
                                    onChange: (e) => el(e),
                                  }),
                                }),
                              ],
                            })
                          : null,
                        (0, i.jsxs)(s.Button, {
                          color: s.Button.Colors.PRIMARY,
                          children: [
                            S.intl.string(S.t.HVxmOD),
                            (0, i.jsx)(u.Z, {
                              ref: N,
                              onChange: (e) => {
                                var t, n;
                                (null === (n = e.currentTarget) || void 0 === n
                                  ? void 0
                                  : null === (t = n.files) || void 0 === t
                                    ? void 0
                                    : t[0]) != null &&
                                  W([
                                    ...V,
                                    ...Array.from(e.currentTarget.files).map(
                                      (e) =>
                                        new d.ZP({
                                          id: (0, l.Z)(),
                                          file: e,
                                          platform: d.ow.WEB,
                                        }),
                                    ),
                                  ]);
                              },
                              multiple: !0,
                            }),
                          ],
                        }),
                        V.length > 0
                          ? (0, i.jsxs)(s.FormSection, {
                              children: [
                                (0, i.jsx)(s.FormTitle, {
                                  children: "Preview",
                                }),
                                (0, i.jsx)("div", {
                                  ref: k,
                                  className: b.attachments,
                                  children:
                                    V.length > 0 &&
                                    V.map((e) =>
                                      (0, i.jsxs)(
                                        "div",
                                        {
                                          className: b.attachment,
                                          children: [
                                            (0, i.jsxs)("div", {
                                              children: [
                                                (0, i.jsx)(v.r, {
                                                  size: h.q.SMALL,
                                                  upload: e,
                                                }),
                                                (0, i.jsx)("div", {
                                                  className: b.removeAttachment,
                                                  children: (0, i.jsx)(x.ZP, {
                                                    children: (0, i.jsx)(m.Z, {
                                                      tooltip: S.intl.string(
                                                        S.t.vN7REx,
                                                      ),
                                                      onClick: () => ef(e.id),
                                                      dangerous: !0,
                                                      children: (0, i.jsx)(
                                                        s.TrashIcon,
                                                        {
                                                          size: "md",
                                                          color: "currentColor",
                                                        },
                                                      ),
                                                    }),
                                                  }),
                                                }),
                                              ],
                                            }),
                                            (0, i.jsx)(s.Text, {
                                              variant: "text-xxs/medium",
                                              color: "text-secondary",
                                              children: e.filename,
                                            }),
                                          ],
                                        },
                                        e.id,
                                      ),
                                    ),
                                }),
                              ],
                            })
                          : null,
                        ed
                          ? (0, i.jsx)(s.Text, {
                              color: "text-danger",
                              variant: "text-sm/normal",
                              children: "Something went wrong, try again!",
                            })
                          : null,
                      ],
                    }),
                  ],
                }),
              }),
              (0, i.jsx)(s.ModalFooter, {
                children: (0, i.jsxs)(s.Stack, {
                  direction: "horizontal",
                  gap: 8,
                  justify: "end",
                  children: [
                    (0, i.jsx)(s.Button, {
                      submitting: es,
                      onClick: eg,
                      children: "Submit and Open Report",
                    }),
                    (0, i.jsx)(s.Button, {
                      color: s.Button.Colors.PRIMARY,
                      onClick: ep,
                      children: S.intl.string(S.t["ETE/oK"]),
                    }),
                  ],
                }),
              }),
            ],
          })
        );
      }
    },
    418421: function (e, t, n) {
      e.exports = {
        formPriorityImageContainer: "formPriorityImageContainer_d76ce1",
        formPriorityTitleContainer: "formPriorityTitleContainer_d76ce1",
        formPriorityTitle: "formPriorityTitle_d76ce1",
        formPriorityDescription: "formPriorityDescription_d76ce1",
        formPriorityImage: "formPriorityImage_d76ce1",
        attachments: "attachments_d76ce1",
        attachment: "attachment_d76ce1",
        removeAttachment: "removeAttachment_d76ce1",
      };
    },
  },
]);
//# sourceMappingURL=8b11d3d99380dc346ce6.js.map
