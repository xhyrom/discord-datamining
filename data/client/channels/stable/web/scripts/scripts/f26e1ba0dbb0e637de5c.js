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
          return c;
        },
        ZD: function () {
          return h;
        },
        pD: function () {
          return d;
        },
      }),
        n(653041);
      var i = n(990547);
      n(804098);
      var r = n(544891),
        l = n(729345),
        a = n(210887);
      n(358085);
      var o = n(573261),
        s = n(981631),
        u = n(388032);
      async function c() {
        return (await r.tn.get({ url: s.ANM.BUG_REPORTS, rejectWithError: !1 }))
          .body;
      }
      function d(e) {
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
        let c = [
          { name: "name", value: e.name },
          { name: "priority", value: "".concat(e.priority) },
          {
            name: "override_platform_information",
            value: "".concat(t.overridePlatformInformation),
          },
          { name: "theme", value: a.Z.theme },
        ];
        "" !== e.description &&
          c.push({ name: "description", value: e.description }),
          "" !== e.url && c.push({ name: "external_url", value: e.url });
        let d =
          null === (r = e.feature) || void 0 === r ? void 0 : r.asana_inbox_id;
        null != d &&
          "" !== d &&
          c.push({ name: "asana_inbox_id", value: "".concat(d) });
        let m = null === (u = e.feature) || void 0 === u ? void 0 : u.name;
        null != m && "" !== m && c.push({ name: "feature_name", value: m }),
          t.overridePlatformInformation &&
            (c.push({ name: "device", value: t.device }),
            c.push({ name: "os", value: t.operatingSystem }),
            c.push({ name: "os_version", value: t.operatingSystemVersion }),
            c.push({ name: "client_version", value: t.clientVersion }),
            c.push({ name: "client_build_number", value: t.clientBuildNumber }),
            c.push({
              name: "release_channel",
              value: window.GLOBAL_ENV.RELEASE_CHANNEL,
            }),
            c.push({ name: "locale", value: t.locale })),
          (0, l.E)(s.GU0.WEB_APP);
        try {
          return await o.Z.post({
            url: s.ANM.BUG_REPORTS,
            attachments: n,
            fields: c,
            trackedActionData: {
              event: i.NetworkActionNames.BUG_REPORT_SUBMIT,
              properties: { priority: e.priority, asana_inbox_id: d },
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
        a = n(442837),
        o = n(481060),
        s = n(53281),
        u = n(476326),
        c = n(273031),
        d = n(859235),
        m = n(898463),
        h = n(951394),
        v = n(594174),
        x = n(768581),
        p = n(358085),
        f = n(223356),
        g = n(225452),
        j = n(388032),
        y = n(466443);
      let S = [
        "Android",
        "iOS",
        "Windows Mobile",
        "Windows",
        "Linux",
        "Mac OS X",
      ].map((e) => ({ label: e, value: e }));
      function I(e) {
        var t, I, b, C, T;
        let { transitionState: _, onClose: P } = e,
          w = r.useRef(null),
          k = r.useRef(null),
          [E, D] = r.useState(""),
          [M, F] = r.useState(""),
          [N, A] = r.useState(),
          [L, R] = r.useState(""),
          [O, B] = r.useState([]),
          [V, Z] = r.useState(),
          [W, z] = r.useState(),
          [G, H] = r.useState(!1),
          [q, U] = r.useState(""),
          [Y, X] = r.useState(
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
            })((0, p.getOS)()),
          ),
          [K, J] = r.useState(""),
          [Q, $] = r.useState(""),
          [ee, et] = r.useState(""),
          [en, ei] = r.useState(""),
          [er, el] = r.useState(!1),
          [ea, eo] = r.useState(!1),
          [es, eu] = r.useState(!1),
          ec = (0, a.e7)([v.default], () => {
            let e = v.default.getCurrentUser();
            return (
              (null == e ? void 0 : e.isStaff()) ||
              (null == e ? void 0 : e.isStaffPersonal())
            );
          }),
          ed = () => {
            null == P || P();
          },
          em = (e) => {
            B(O.filter((t) => t.id !== e));
          };
        async function eh() {
          var e;
          if ((eu(!1), "" === E || null == N)) {
            el(!0);
            return;
          }
          let t =
            null == V
              ? void 0
              : null === (e = V.features) || void 0 === e
                ? void 0
                : e.find((e) => (0, f.pD)(e) === W);
          eo(!0), el(!1);
          let r = (0, g.D)(
              O.map((e) => {
                let { item: t } = e;
                return t;
              }),
            ),
            l =
              !0 === G
                ? {
                    overridePlatformInformation: G,
                    device: q,
                    operatingSystem: Y,
                    operatingSystemVersion: K,
                    clientVersion: Q,
                    clientBuildNumber: ee,
                    locale: en,
                  }
                : { overridePlatformInformation: G },
            a = await (0, f.ZD)(
              { name: E, description: M, priority: N, feature: t, url: L },
              l,
              r,
            ).catch(() => eu(!0));
          eo(!1),
            null != a && a.ok
              ? (ec && window.open(a.body.permalink_url, "_blank"),
                ed(),
                (0, o.openModalLazy)(async () => {
                  let { default: e } = await n
                    .e("64648")
                    .then(n.bind(n, 81155));
                  return (t) => (0, i.jsx)(e, { ...t, asanaTask: a.body });
                }))
              : eu(!0);
        }
        return (
          r.useEffect(() => {
            async function e() {
              Z(await (0, f.WG)());
            }
            ec && e();
          }, [ec]),
          r.useEffect(() => {
            if (O.length > 0) {
              var e;
              null === (e = k.current) ||
                void 0 === e ||
                e.scrollIntoView({ behavior: "smooth", block: "end" });
            }
          }, [O]),
          (0, i.jsxs)(o.ModalRoot, {
            transitionState: _,
            "aria-label": j.intl.string(j.t.mCCdws),
            size: o.ModalSize.MEDIUM,
            children: [
              (0, i.jsx)(o.ModalHeader, {
                children: (0, i.jsx)(o.Heading, {
                  variant: "heading-lg/semibold",
                  children: (0, i.jsx)(o.H, {
                    children: j.intl.string(j.t["5Lqopa"]),
                  }),
                }),
              }),
              (0, i.jsx)(o.ModalContent, {
                children: (0, i.jsx)("form", {
                  onSubmit: eh,
                  children: (0, i.jsxs)(o.Stack, {
                    gap: 24,
                    padding: { top: 8, bottom: 8 },
                    children: [
                      (0, i.jsx)(o.FormItem, {
                        error:
                          er && "" === E ? j.intl.string(j.t.EkokLy) : null,
                        title: j.intl.string(j.t.OZRgj4),
                        children: (0, i.jsx)(o.TextInput, {
                          placeholder: "Something is broken on this screen.",
                          type: "text",
                          value: E,
                          maxLength: 100,
                          onChange: D,
                        }),
                      }),
                      (0, i.jsxs)(o.FormItem, {
                        title: j.intl.string(j.t["1SplHx"]),
                        children: [
                          (0, i.jsx)(o.TextArea, {
                            placeholder: "What did you expect to see?",
                            value: M,
                            onChange: F,
                          }),
                          (0, i.jsx)(o.FormText, {
                            type: o.FormTextTypes.DESCRIPTION,
                            children:
                              "You can add additional information/media on the ticket after submitting",
                          }),
                        ],
                      }),
                      (0, i.jsx)(o.FormItem, {
                        error:
                          er && void 0 === N ? j.intl.string(j.t.EkokLy) : null,
                        title: j.intl.string(j.t.xMXLdX),
                        children: (0, i.jsx)(o.SingleSelect, {
                          renderOptionLabel: (e) =>
                            (function (e) {
                              let t = e.priority;
                              return (0, i.jsxs)("div", {
                                className: y.formPriorityImageContainer,
                                children: [
                                  (0, i.jsxs)("div", {
                                    className: y.formPriorityTitleContainer,
                                    children: [
                                      (0, i.jsx)("img", {
                                        alt: "",
                                        className: y.formPriorityImage,
                                        src: (0, x.gT)({
                                          id: t.emoji,
                                          animated: !0,
                                          size: 48,
                                        }),
                                      }),
                                      (0, i.jsx)(o.Text, {
                                        color: "header-primary",
                                        variant: "text-sm/semibold",
                                        className: y.formPriorityTitle,
                                        children: t.title,
                                      }),
                                    ],
                                  }),
                                  (0, i.jsx)(o.Text, {
                                    color: "header-secondary",
                                    variant: "text-xs/normal",
                                    className: y.formPriorityDescription,
                                    children: t.description,
                                  }),
                                ],
                              });
                            })(e),
                          onChange: A,
                          options: (0, f.Tj)().map((e) => ({
                            priority: e,
                            value: e.value,
                            label: e.title,
                          })),
                          value: N,
                          maxVisibleItems: 3,
                          closeOnSelect: !0,
                        }),
                      }),
                      ec &&
                        (0, i.jsx)(o.FormItem, {
                          title: j.intl.string(j.t["77VVd3"]),
                          children: (0, i.jsx)(o.SearchableSelect, {
                            value: W,
                            options:
                              null !==
                                (T =
                                  null == (t = V)
                                    ? void 0
                                    : null === (C = t.features) || void 0 === C
                                      ? void 0
                                      : null ===
                                            (b = C.filter(
                                              (e) => "" !== (0, f.pD)(e),
                                            )) || void 0 === b
                                        ? void 0
                                        : null ===
                                              (I = b.map((e) => {
                                                var t;
                                                return {
                                                  label:
                                                    null !== (t = e.name) &&
                                                    void 0 !== t
                                                      ? t
                                                      : "",
                                                  value: (0, f.pD)(e),
                                                };
                                              })) || void 0 === I
                                          ? void 0
                                          : I.sort((e, t) =>
                                              e.label.localeCompare(t.label),
                                            )) && void 0 !== T
                                ? T
                                : [],
                            isDisabled: null == V,
                            onChange: (e) => z(e),
                          }),
                        }),
                      (0, i.jsx)(o.FormItem, {
                        title: j.intl.string(j.t["7p5pqq"]),
                        children: (0, i.jsx)(o.TextInput, {
                          placeholder: j.intl.string(j.t.HewMzs),
                          type: "text",
                          value: L,
                          maxLength: 5e3,
                          onChange: R,
                        }),
                      }),
                      (0, i.jsx)(o.FormItem, {
                        children: (0, i.jsx)(o.Checkbox, {
                          value: G,
                          onChange: (e, t) => H(t),
                          children: j.intl.string(j.t.ayhqiI),
                        }),
                      }),
                      G
                        ? (0, i.jsxs)(i.Fragment, {
                            children: [
                              (0, i.jsx)(o.FormItem, {
                                title: j.intl.string(j.t.rrI4Tk),
                                children: (0, i.jsx)(o.TextInput, {
                                  placeholder: "Device",
                                  value: q,
                                  onChange: (e) => U(e),
                                }),
                              }),
                              (0, i.jsx)(o.FormItem, {
                                title: j.intl.string(j.t.kcHxi4),
                                children: (0, i.jsx)(o.SingleSelect, {
                                  value: Y,
                                  options: S,
                                  onChange: (e) => X(e),
                                }),
                              }),
                              (0, i.jsx)(o.FormItem, {
                                title: j.intl.string(j.t.rEtxdn),
                                children: (0, i.jsx)(o.TextInput, {
                                  placeholder: "Operating System Version",
                                  value: K,
                                  onChange: (e) => J(e),
                                }),
                              }),
                              (0, i.jsx)(o.FormItem, {
                                title: j.intl.string(j.t["wy1M/v"]),
                                children: (0, i.jsx)(o.TextInput, {
                                  placeholder: "Client Version",
                                  value: Q,
                                  onChange: (e) => $(e),
                                }),
                              }),
                              (0, i.jsx)(o.FormItem, {
                                title: j.intl.string(j.t.f7kbVl),
                                children: (0, i.jsx)(o.TextInput, {
                                  placeholder: "Client Build Number",
                                  value: ee,
                                  onChange: (e) => et(e),
                                }),
                              }),
                              (0, i.jsx)(o.FormItem, {
                                title: j.intl.string(j.t["4Z5+zs"]),
                                children: (0, i.jsx)(o.TextInput, {
                                  placeholder: "Locale",
                                  value: en,
                                  onChange: (e) => ei(e),
                                }),
                              }),
                            ],
                          })
                        : null,
                      (0, i.jsxs)(o.Button, {
                        color: o.Button.Colors.PRIMARY,
                        children: [
                          j.intl.string(j.t.HVxmOD),
                          (0, i.jsx)(s.Z, {
                            ref: w,
                            onChange: (e) => {
                              var t, n;
                              (null === (n = e.currentTarget) || void 0 === n
                                ? void 0
                                : null === (t = n.files) || void 0 === t
                                  ? void 0
                                  : t[0]) != null &&
                                B([
                                  ...O,
                                  ...Array.from(e.currentTarget.files).map(
                                    (e) =>
                                      new u.ZP({
                                        id: (0, l.Z)(),
                                        file: e,
                                        platform: u.ow.WEB,
                                      }),
                                  ),
                                ]);
                            },
                            multiple: !0,
                          }),
                        ],
                      }),
                      O.length > 0
                        ? (0, i.jsxs)(o.FormSection, {
                            children: [
                              (0, i.jsx)(o.FormTitle, { children: "Preview" }),
                              (0, i.jsx)("div", {
                                ref: k,
                                className: y.attachments,
                                children:
                                  O.length > 0 &&
                                  O.map((e) =>
                                    (0, i.jsxs)(
                                      "div",
                                      {
                                        className: y.attachment,
                                        children: [
                                          (0, i.jsxs)("div", {
                                            children: [
                                              (0, i.jsx)(m.r, {
                                                size: d.q.SMALL,
                                                upload: e,
                                              }),
                                              (0, i.jsx)("div", {
                                                className: y.removeAttachment,
                                                children: (0, i.jsx)(h.ZP, {
                                                  children: (0, i.jsx)(c.Z, {
                                                    tooltip: j.intl.string(
                                                      j.t.vN7REx,
                                                    ),
                                                    onClick: () => em(e.id),
                                                    dangerous: !0,
                                                    children: (0, i.jsx)(
                                                      o.TrashIcon,
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
                                          (0, i.jsx)(o.Text, {
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
                      es
                        ? (0, i.jsx)(o.Text, {
                            color: "text-danger",
                            variant: "text-sm/normal",
                            children: "Something went wrong, try again!",
                          })
                        : null,
                    ],
                  }),
                }),
              }),
              (0, i.jsx)(o.ModalFooter, {
                children: (0, i.jsxs)(o.Stack, {
                  direction: "horizontal",
                  gap: 8,
                  justify: "end",
                  children: [
                    (0, i.jsx)(o.Button, {
                      submitting: ea,
                      onClick: eh,
                      children: "Submit and Open Report",
                    }),
                    (0, i.jsx)(o.Button, {
                      color: o.Button.Colors.PRIMARY,
                      onClick: ed,
                      children: j.intl.string(j.t["ETE/oK"]),
                    }),
                  ],
                }),
              }),
            ],
          })
        );
      }
    },
    466443: function (e, t, n) {
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
//# sourceMappingURL=f26e1ba0dbb0e637de5c.js.map
