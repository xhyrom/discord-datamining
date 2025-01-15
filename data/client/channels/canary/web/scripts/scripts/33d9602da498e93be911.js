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
        a = n(210887);
      n(358085);
      var o = n(573261),
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
          { name: "theme", value: a.Z.theme },
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
          return await o.Z.post({
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
        a = n(442837),
        o = n(481060),
        s = n(53281),
        u = n(476326),
        d = n(304761),
        c = n(273031),
        m = n(859235),
        h = n(898463),
        v = n(951394),
        x = n(594174),
        p = n(768581),
        f = n(358085),
        g = n(223356),
        j = n(225452),
        y = n(388032),
        S = n(418421);
      let b = [
        "Android",
        "iOS",
        "Windows Mobile",
        "Windows",
        "Linux",
        "Mac OS X",
      ].map((e) => ({ label: e, value: e }));
      function I(e) {
        var t, I, C, T, _;
        let { transitionState: P, onClose: w } = e,
          k = r.useRef(null),
          E = r.useRef(null),
          [N, O] = r.useState(""),
          [F, D] = r.useState(""),
          [M, A] = r.useState(),
          [R, L] = r.useState(""),
          [B, Z] = r.useState([]),
          [V, W] = r.useState(),
          [z, G] = r.useState(),
          [H, q] = r.useState(!1),
          [U, Y] = r.useState(""),
          [X, K] = r.useState(
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
            })((0, f.getOS)()),
          ),
          [J, Q] = r.useState(""),
          [$, ee] = r.useState(""),
          [et, en] = r.useState(""),
          [ei, er] = r.useState(""),
          [el, ea] = r.useState(!1),
          [eo, es] = r.useState(!1),
          [eu, ed] = r.useState(!1),
          ec = (0, a.e7)([x.default], () => {
            let e = x.default.getCurrentUser();
            return (
              (null == e ? void 0 : e.isStaff()) ||
              (null == e ? void 0 : e.isStaffPersonal())
            );
          }),
          em = (0, a.e7)([d.C], () => {
            var e;
            return null === (e = d.C.getCurrentBuildOverride().overrides) ||
              void 0 === e
              ? void 0
              : e.discord_web;
          }),
          eh = () => {
            null == w || w();
          },
          ev = (e) => {
            Z(B.filter((t) => t.id !== e));
          };
        async function ex() {
          var e, t;
          if ((ed(!1), "" === N || null == M)) {
            ea(!0);
            return;
          }
          let r =
            null == V
              ? void 0
              : null === (e = V.features) || void 0 === e
                ? void 0
                : e.find((e) => (0, g.pD)(e) === z);
          es(!0), ea(!1);
          let l = (0, j.D)(
              B.map((e) => {
                let { item: t } = e;
                return t;
              }),
            ),
            a =
              !0 === H
                ? {
                    overridePlatformInformation: H,
                    device: U,
                    operatingSystem: X,
                    operatingSystemVersion: J,
                    clientVersion: $,
                    clientBuildNumber: et,
                    locale: ei,
                  }
                : { overridePlatformInformation: H },
            s = await (0, g.ZD)(
              {
                name: N,
                description: F,
                priority: M,
                feature: r,
                url: R,
                buildOverride:
                  null !== (t = null == em ? void 0 : em.id) && void 0 !== t
                    ? t
                    : null,
              },
              a,
              l,
            ).catch(() => ed(!0));
          es(!1),
            null != s && s.ok
              ? (ec && window.open(s.body.permalink_url, "_blank"),
                eh(),
                (0, o.openModalLazy)(async () => {
                  let { default: e } = await n
                    .e("64648")
                    .then(n.bind(n, 81155));
                  return (t) => (0, i.jsx)(e, { ...t, asanaTask: s.body });
                }))
              : ed(!0);
        }
        return (
          r.useEffect(() => {
            async function e() {
              W(await (0, g.WG)());
            }
            ec && e();
          }, [ec]),
          r.useEffect(() => {
            if (B.length > 0) {
              var e;
              null === (e = E.current) ||
                void 0 === e ||
                e.scrollIntoView({ behavior: "smooth", block: "end" });
            }
          }, [B]),
          (0, i.jsxs)(o.ModalRoot, {
            transitionState: P,
            "aria-label": y.intl.string(y.t.mCCdws),
            size: o.ModalSize.MEDIUM,
            children: [
              (0, i.jsx)(o.ModalHeader, {
                children: (0, i.jsx)(o.Heading, {
                  variant: "heading-lg/semibold",
                  children: (0, i.jsx)(o.H, {
                    children: y.intl.string(y.t["5Lqopa"]),
                  }),
                }),
              }),
              (0, i.jsx)(o.ModalContent, {
                children: (0, i.jsxs)("form", {
                  onSubmit: ex,
                  children: [
                    null != em &&
                      (0, i.jsx)(o.FormNotice, {
                        type: o.FormNotice.Types.WARNING,
                        body: y.intl.format(y.t["yY60+/"], {
                          buildOverrideHook: () =>
                            (0, i.jsx)("b", {
                              children: null == em ? void 0 : em.id,
                            }),
                        }),
                        title: y.intl.string(y.t["ZP/hEx"]),
                      }),
                    (0, i.jsxs)(o.Stack, {
                      gap: 24,
                      padding: { top: 8, bottom: 8 },
                      children: [
                        (0, i.jsx)(o.FormItem, {
                          error:
                            el && "" === N ? y.intl.string(y.t.EkokLy) : null,
                          title: y.intl.string(y.t.OZRgj4),
                          children: (0, i.jsx)(o.TextInput, {
                            placeholder: "Something is broken on this screen.",
                            type: "text",
                            value: N,
                            maxLength: 100,
                            onChange: O,
                          }),
                        }),
                        (0, i.jsxs)(o.FormItem, {
                          title: y.intl.string(y.t["1SplHx"]),
                          children: [
                            (0, i.jsx)(o.TextArea, {
                              placeholder: "What did you expect to see?",
                              value: F,
                              onChange: D,
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
                            el && void 0 === M
                              ? y.intl.string(y.t.EkokLy)
                              : null,
                          title: y.intl.string(y.t.xMXLdX),
                          children: (0, i.jsx)(o.SingleSelect, {
                            renderOptionLabel: (e) =>
                              (function (e) {
                                let t = e.priority;
                                return (0, i.jsxs)("div", {
                                  className: S.formPriorityImageContainer,
                                  children: [
                                    (0, i.jsxs)("div", {
                                      className: S.formPriorityTitleContainer,
                                      children: [
                                        (0, i.jsx)("img", {
                                          alt: "",
                                          className: S.formPriorityImage,
                                          src: (0, p.gT)({
                                            id: t.emoji,
                                            animated: !0,
                                            size: 48,
                                          }),
                                        }),
                                        (0, i.jsx)(o.Text, {
                                          color: "header-primary",
                                          variant: "text-sm/semibold",
                                          className: S.formPriorityTitle,
                                          children: t.title,
                                        }),
                                      ],
                                    }),
                                    (0, i.jsx)(o.Text, {
                                      color: "header-secondary",
                                      variant: "text-xs/normal",
                                      className: S.formPriorityDescription,
                                      children: t.description,
                                    }),
                                  ],
                                });
                              })(e),
                            onChange: A,
                            options: (0, g.Tj)().map((e) => ({
                              priority: e,
                              value: e.value,
                              label: e.title,
                            })),
                            value: M,
                            maxVisibleItems: 3,
                            closeOnSelect: !0,
                          }),
                        }),
                        ec &&
                          (0, i.jsx)(o.FormItem, {
                            title: y.intl.string(y.t["77VVd3"]),
                            children: (0, i.jsx)(o.SearchableSelect, {
                              value: z,
                              options:
                                null !==
                                  (_ =
                                    null == (t = V)
                                      ? void 0
                                      : null === (T = t.features) ||
                                          void 0 === T
                                        ? void 0
                                        : null ===
                                              (C = T.filter(
                                                (e) => "" !== (0, g.pD)(e),
                                              )) || void 0 === C
                                          ? void 0
                                          : null ===
                                                (I = C.map((e) => {
                                                  var t;
                                                  return {
                                                    label:
                                                      null !== (t = e.name) &&
                                                      void 0 !== t
                                                        ? t
                                                        : "",
                                                    value: (0, g.pD)(e),
                                                  };
                                                })) || void 0 === I
                                            ? void 0
                                            : I.sort((e, t) =>
                                                e.label.localeCompare(t.label),
                                              )) && void 0 !== _
                                  ? _
                                  : [],
                              isDisabled: null == V,
                              onChange: (e) => G(e),
                            }),
                          }),
                        (0, i.jsx)(o.FormItem, {
                          title: y.intl.string(y.t["7p5pqq"]),
                          children: (0, i.jsx)(o.TextInput, {
                            placeholder: y.intl.string(y.t.HewMzs),
                            type: "text",
                            value: R,
                            maxLength: 5e3,
                            onChange: L,
                          }),
                        }),
                        (0, i.jsx)(o.FormItem, {
                          children: (0, i.jsx)(o.Checkbox, {
                            value: H,
                            onChange: (e, t) => q(t),
                            children: y.intl.string(y.t.ayhqiI),
                          }),
                        }),
                        H
                          ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                (0, i.jsx)(o.FormItem, {
                                  title: y.intl.string(y.t.rrI4Tk),
                                  children: (0, i.jsx)(o.TextInput, {
                                    placeholder: "Device",
                                    value: U,
                                    onChange: (e) => Y(e),
                                  }),
                                }),
                                (0, i.jsx)(o.FormItem, {
                                  title: y.intl.string(y.t.kcHxi4),
                                  children: (0, i.jsx)(o.SingleSelect, {
                                    value: X,
                                    options: b,
                                    onChange: (e) => K(e),
                                  }),
                                }),
                                (0, i.jsx)(o.FormItem, {
                                  title: y.intl.string(y.t.rEtxdn),
                                  children: (0, i.jsx)(o.TextInput, {
                                    placeholder: "Operating System Version",
                                    value: J,
                                    onChange: (e) => Q(e),
                                  }),
                                }),
                                (0, i.jsx)(o.FormItem, {
                                  title: y.intl.string(y.t["wy1M/v"]),
                                  children: (0, i.jsx)(o.TextInput, {
                                    placeholder: "Client Version",
                                    value: $,
                                    onChange: (e) => ee(e),
                                  }),
                                }),
                                (0, i.jsx)(o.FormItem, {
                                  title: y.intl.string(y.t.f7kbVl),
                                  children: (0, i.jsx)(o.TextInput, {
                                    placeholder: "Client Build Number",
                                    value: et,
                                    onChange: (e) => en(e),
                                  }),
                                }),
                                (0, i.jsx)(o.FormItem, {
                                  title: y.intl.string(y.t["4Z5+zs"]),
                                  children: (0, i.jsx)(o.TextInput, {
                                    placeholder: "Locale",
                                    value: ei,
                                    onChange: (e) => er(e),
                                  }),
                                }),
                              ],
                            })
                          : null,
                        (0, i.jsxs)(o.Button, {
                          color: o.Button.Colors.PRIMARY,
                          children: [
                            y.intl.string(y.t.HVxmOD),
                            (0, i.jsx)(s.Z, {
                              ref: k,
                              onChange: (e) => {
                                var t, n;
                                (null === (n = e.currentTarget) || void 0 === n
                                  ? void 0
                                  : null === (t = n.files) || void 0 === t
                                    ? void 0
                                    : t[0]) != null &&
                                  Z([
                                    ...B,
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
                        B.length > 0
                          ? (0, i.jsxs)(o.FormSection, {
                              children: [
                                (0, i.jsx)(o.FormTitle, {
                                  children: "Preview",
                                }),
                                (0, i.jsx)("div", {
                                  ref: E,
                                  className: S.attachments,
                                  children:
                                    B.length > 0 &&
                                    B.map((e) =>
                                      (0, i.jsxs)(
                                        "div",
                                        {
                                          className: S.attachment,
                                          children: [
                                            (0, i.jsxs)("div", {
                                              children: [
                                                (0, i.jsx)(h.r, {
                                                  size: m.q.SMALL,
                                                  upload: e,
                                                }),
                                                (0, i.jsx)("div", {
                                                  className: S.removeAttachment,
                                                  children: (0, i.jsx)(v.ZP, {
                                                    children: (0, i.jsx)(c.Z, {
                                                      tooltip: y.intl.string(
                                                        y.t.vN7REx,
                                                      ),
                                                      onClick: () => ev(e.id),
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
                        eu
                          ? (0, i.jsx)(o.Text, {
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
              (0, i.jsx)(o.ModalFooter, {
                children: (0, i.jsxs)(o.Stack, {
                  direction: "horizontal",
                  gap: 8,
                  justify: "end",
                  children: [
                    (0, i.jsx)(o.Button, {
                      submitting: eo,
                      onClick: ex,
                      children: "Submit and Open Report",
                    }),
                    (0, i.jsx)(o.Button, {
                      color: o.Button.Colors.PRIMARY,
                      onClick: eh,
                      children: y.intl.string(y.t["ETE/oK"]),
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
//# sourceMappingURL=33d9602da498e93be911.js.map
