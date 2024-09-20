"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["83051"],
  {
    289575: function (e) {
      e.exports = "/assets/f3b668d24838c7031ba4.svg";
    },
    371411: function (e) {
      e.exports = "/assets/7b87609b13dad1dd3389.svg";
    },
    223356: function (e, t, n) {
      n.d(t, {
        Tj: function () {
          return d;
        },
        WG: function () {
          return u;
        },
        ZD: function () {
          return _;
        },
        pD: function () {
          return m;
        },
      }),
        n(653041);
      var a = n(990547);
      n(804098);
      var r = n(544891),
        i = n(729345),
        o = n(210887);
      n(358085);
      var s = n(573261),
        l = n(981631),
        c = n(689938);
      async function u() {
        return (await r.tn.get({ url: l.ANM.BUG_REPORTS })).body;
      }
      function m(e) {
        var t, n;
        return null !==
          (n =
            null !== (t = null == e ? void 0 : e.name) && void 0 !== t
              ? t
              : "" + (null == e ? void 0 : e.squad)) && void 0 !== n
          ? n
          : "";
      }
      function d() {
        return [
          {
            title: c.Z.Messages.BUG_REPORT_PRIORITY_CRITICAL_TITLE,
            description:
              c.Z.Messages.BUG_REPORT_PRIORITY_CRITICAL_DESCRIPTION.format(),
            emoji: "801497159479722084",
            value: 0,
          },
          {
            title: c.Z.Messages.BUG_REPORT_PRIORITY_HIGH_TITLE,
            description:
              c.Z.Messages.BUG_REPORT_PRIORITY_HIGH_DESCRIPTION.format(),
            emoji: "410336837563973632",
            value: 1,
          },
          {
            title: c.Z.Messages.BUG_REPORT_PRIORITY_LOW_TITLE,
            description:
              c.Z.Messages.BUG_REPORT_PRIORITY_LOW_DESCRIPTION.format(),
            emoji: "841420679643529296",
            value: 2,
          },
          {
            title: c.Z.Messages.BUG_REPORT_PRIORITY_VERY_LOW_TITLE,
            description:
              c.Z.Messages.BUG_REPORT_PRIORITY_VERY_LOW_DESCRIPTION.format(),
            emoji: "827645852352512021",
            value: 3,
          },
        ];
      }
      async function _(e, t, n) {
        var r, c;
        let u = [
          { name: "name", value: e.name },
          { name: "priority", value: "".concat(e.priority) },
          {
            name: "override_platform_information",
            value: "".concat(t.overridePlatformInformation),
          },
          { name: "theme", value: o.Z.theme },
        ];
        "" !== e.description &&
          u.push({ name: "description", value: e.description }),
          "" !== e.url && u.push({ name: "external_url", value: e.url });
        let m =
          null === (r = e.feature) || void 0 === r ? void 0 : r.asana_inbox_id;
        null != m &&
          "" !== m &&
          u.push({ name: "asana_inbox_id", value: "".concat(m) });
        let d = null === (c = e.feature) || void 0 === c ? void 0 : c.name;
        null != d && "" !== d && u.push({ name: "feature_name", value: d }),
          t.overridePlatformInformation &&
            (u.push({ name: "device", value: t.device }),
            u.push({ name: "os", value: t.operatingSystem }),
            u.push({ name: "os_version", value: t.operatingSystemVersion }),
            u.push({ name: "client_version", value: t.clientVersion }),
            u.push({ name: "client_build_number", value: t.clientBuildNumber }),
            u.push({
              name: "release_channel",
              value: window.GLOBAL_ENV.RELEASE_CHANNEL,
            }),
            u.push({ name: "locale", value: t.locale })),
          (0, i.E)(l.GU0.WEB_APP);
        try {
          return await s.Z.post({
            url: l.ANM.BUG_REPORTS,
            attachments: n,
            fields: u,
            trackedActionData: {
              event: a.NetworkActionNames.BUG_REPORT_SUBMIT,
              properties: { priority: e.priority, asana_inbox_id: m },
            },
          });
        } catch (e) {
          return e;
        }
      }
    },
    225452: function (e, t, n) {
      n.d(t, {
        D: function () {
          return a;
        },
      });
      function a(e) {
        return e.map((e, t) => {
          var n, a;
          return {
            file: e.file,
            name:
              null !== (a = e.id) && void 0 !== a ? a : "attachment_".concat(t),
            filename: null === (n = e.file) || void 0 === n ? void 0 : n.name,
          };
        });
      }
    },
    115072: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return O;
          },
        }),
        n(47120);
      var a = n(735250),
        r = n(470079),
        i = n(772848),
        o = n(442837),
        s = n(780384),
        l = n(481060),
        c = n(53281),
        u = n(476326),
        m = n(273031),
        d = n(898463),
        _ = n(112831),
        h = n(951394),
        p = n(210887),
        f = n(594174),
        v = n(768581),
        I = n(358085),
        R = n(223356),
        x = n(225452),
        T = n(689938),
        g = n(549667),
        E = n(289575),
        j = n(371411);
      let C = [
        "Android",
        "iOS",
        "Windows Mobile",
        "Windows",
        "Linux",
        "Mac OS X",
      ].map((e) => ({ label: e, value: e }));
      function O(e) {
        var t, O, P, N, S;
        let { transitionState: B, onClose: M } = e,
          b = r.useRef(null),
          Z = r.useRef(null),
          [y, G] = r.useState(""),
          [U, L] = r.useState(""),
          [A, D] = r.useState(),
          [w, F] = r.useState(""),
          [k, V] = r.useState([]),
          [Y, W] = r.useState(),
          [H, z] = r.useState(),
          [X, Q] = r.useState(!1),
          [q, K] = r.useState(""),
          [J, $] = r.useState(
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
            })((0, I.getOS)()),
          ),
          [ee, et] = r.useState(""),
          [en, ea] = r.useState(""),
          [er, ei] = r.useState(""),
          [eo, es] = r.useState(""),
          [el, ec] = r.useState(!1),
          [eu, em] = r.useState(!1),
          [ed, e_] = r.useState(!1),
          eh = (0, o.e7)([p.Z], () => p.Z.theme),
          ep = (0, o.e7)([f.default], () => {
            let e = f.default.getCurrentUser();
            return (
              (null == e ? void 0 : e.isStaff()) ||
              (null == e ? void 0 : e.isStaffPersonal())
            );
          }),
          ef = () => {
            null == M || M();
          },
          ev = (e) => {
            V(k.filter((t) => t.id !== e));
          };
        async function eI() {
          var e;
          if ((e_(!1), "" === y || null == A)) {
            ec(!0);
            return;
          }
          let t =
            null == Y
              ? void 0
              : null === (e = Y.features) || void 0 === e
                ? void 0
                : e.find((e) => (0, R.pD)(e) === H);
          em(!0), ec(!1);
          let r = (0, x.D)(
              k.map((e) => {
                let { item: t } = e;
                return t;
              }),
            ),
            i =
              !0 === X
                ? {
                    overridePlatformInformation: X,
                    device: q,
                    operatingSystem: J,
                    operatingSystemVersion: ee,
                    clientVersion: en,
                    clientBuildNumber: er,
                    locale: eo,
                  }
                : { overridePlatformInformation: X },
            o = await (0, R.ZD)(
              { name: y, description: U, priority: A, feature: t, url: w },
              i,
              r,
            ).catch(() => e_(!0));
          em(!1),
            null != o && o.ok
              ? (ep && window.open(o.body.permalink_url, "_blank"),
                ef(),
                (0, l.openModalLazy)(async () => {
                  let { default: e } = await n
                    .e("64648")
                    .then(n.bind(n, 81155));
                  return (t) => (0, a.jsx)(e, { ...t, asanaTask: o.body });
                }))
              : e_(!0);
        }
        r.useEffect(() => {
          async function e() {
            W(await (0, R.WG)());
          }
          ep && e();
        }, [ep]),
          r.useEffect(() => {
            if (k.length > 0) {
              var e;
              null === (e = Z.current) ||
                void 0 === e ||
                e.scrollIntoView({ behavior: "smooth", block: "end" });
            }
          }, [k]);
        let eR = (0, s.wj)(eh) ? E : j;
        return (0, a.jsx)(l.ModalRoot, {
          className: g.modalRoot,
          transitionState: B,
          "aria-label": T.Z.Messages.SUBMIT_BUG,
          children: (0, a.jsx)(l.ModalContent, {
            className: g.modalContent,
            paddingFix: !1,
            children: (0, a.jsx)("div", {
              className: g.container,
              children: (0, a.jsx)(l.HeadingLevel, {
                forceLevel: 1,
                component: (0, a.jsx)("div", {
                  className: g.sidebarContainer,
                  children: (0, a.jsx)(_.Z, {
                    strong: !0,
                    color: _.Z.Colors.HEADER_PRIMARY,
                    size: _.Z.Sizes.SIZE_24,
                    children: (0, a.jsx)(l.H, {
                      children: T.Z.Messages.BUG_REPORT_TITLE,
                    }),
                  }),
                }),
                children: (0, a.jsxs)("div", {
                  className: g.contentContainer,
                  children: [
                    (0, a.jsx)("img", {
                      className: g.contentIcon,
                      alt: "",
                      src: eR,
                    }),
                    (0, a.jsxs)("form", {
                      className: g.form,
                      onSubmit: eI,
                      children: [
                        (0, a.jsx)(l.FormItem, {
                          error: el && "" === y ? T.Z.Messages.REQUIRED : null,
                          title: T.Z.Messages.BUG_REPORT_NAME,
                          className: g.formInput,
                          children: (0, a.jsx)(l.TextInput, {
                            placeholder: "Something is broken on this screen.",
                            type: "text",
                            value: y,
                            maxLength: 100,
                            onChange: G,
                          }),
                        }),
                        (0, a.jsxs)(l.FormItem, {
                          title: T.Z.Messages.BUG_REPORT_DESCRIPTION,
                          className: g.formInput,
                          children: [
                            (0, a.jsx)(l.TextArea, {
                              placeholder: "What did you expect to see?",
                              value: U,
                              onChange: L,
                            }),
                            (0, a.jsx)(l.Text, {
                              variant: "text-sm/normal",
                              color: "info-help-text",
                              children:
                                "You can add additional information/media on the ticket after submitting",
                            }),
                          ],
                        }),
                        (0, a.jsx)(l.FormItem, {
                          error:
                            el && void 0 === A ? T.Z.Messages.REQUIRED : null,
                          title: T.Z.Messages.BUG_REPORT_PRIORITY,
                          className: g.formInput,
                          children: (0, a.jsx)(l.SingleSelect, {
                            renderOptionLabel: (e) =>
                              (function (e) {
                                let t = e.priority;
                                return (0, a.jsxs)("div", {
                                  className: g.formPriorityImageContainer,
                                  children: [
                                    (0, a.jsxs)("div", {
                                      className: g.formPriorityTitleContainer,
                                      children: [
                                        (0, a.jsx)("img", {
                                          alt: "",
                                          className: g.formPriorityImage,
                                          src: (0, v.gT)({
                                            id: t.emoji,
                                            animated: !0,
                                            size: 48,
                                          }),
                                        }),
                                        (0, a.jsx)(l.Text, {
                                          color: "header-primary",
                                          variant: "text-sm/semibold",
                                          className: g.formPriorityTitle,
                                          children: t.title,
                                        }),
                                      ],
                                    }),
                                    (0, a.jsx)(l.Text, {
                                      color: "header-secondary",
                                      variant: "text-xs/normal",
                                      className: g.formPriorityDescription,
                                      children: t.description,
                                    }),
                                  ],
                                });
                              })(e),
                            onChange: D,
                            options: (0, R.Tj)().map((e) => ({
                              priority: e,
                              value: e.value,
                              label: e.title,
                            })),
                            value: A,
                            maxVisibleItems: 3,
                            closeOnSelect: !0,
                          }),
                        }),
                        ep &&
                          (0, a.jsx)(l.FormItem, {
                            title: T.Z.Messages.BUG_REPORT_FEATURE_AREA,
                            className: g.formInput,
                            children: (0, a.jsx)(l.SearchableSelect, {
                              value: H,
                              options:
                                null !==
                                  (S =
                                    null == (t = Y)
                                      ? void 0
                                      : null === (N = t.features) ||
                                          void 0 === N
                                        ? void 0
                                        : null ===
                                              (P = N.filter(
                                                (e) => "" !== (0, R.pD)(e),
                                              )) || void 0 === P
                                          ? void 0
                                          : null ===
                                                (O = P.map((e) => {
                                                  var t;
                                                  return {
                                                    label:
                                                      null !== (t = e.name) &&
                                                      void 0 !== t
                                                        ? t
                                                        : "",
                                                    value: (0, R.pD)(e),
                                                  };
                                                })) || void 0 === O
                                            ? void 0
                                            : O.sort((e, t) =>
                                                e.label.localeCompare(t.label),
                                              )) && void 0 !== S
                                  ? S
                                  : [],
                              isDisabled: null == Y,
                              onChange: (e) => z(e),
                            }),
                          }),
                        (0, a.jsx)(l.FormItem, {
                          title: T.Z.Messages.BUG_REPORT_URL,
                          className: g.formInput,
                          children: (0, a.jsx)(l.TextInput, {
                            placeholder:
                              T.Z.Messages.BUG_REPORT_EXTERNAL_SOURCE,
                            type: "text",
                            value: w,
                            maxLength: 5e3,
                            onChange: F,
                          }),
                        }),
                        (0, a.jsx)(l.FormItem, {
                          className: g.formInput,
                          children: (0, a.jsx)(l.Checkbox, {
                            value: X,
                            onChange: (e, t) => Q(t),
                            children: (0, a.jsx)(l.Text, {
                              variant: "text-sm/normal",
                              color: "info-help-text",
                              children:
                                T.Z.Messages
                                  .BUG_REPORT_OVERRIDE_PLATFORM_INFORMATION,
                            }),
                          }),
                        }),
                        X
                          ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                (0, a.jsx)(l.FormItem, {
                                  title: T.Z.Messages.BUG_REPORT_DEVICE,
                                  className: g.formInput,
                                  children: (0, a.jsx)(l.TextInput, {
                                    placeholder: "Device",
                                    value: q,
                                    onChange: (e) => K(e),
                                  }),
                                }),
                                (0, a.jsx)(l.FormItem, {
                                  title: T.Z.Messages.BUG_REPORT_OS,
                                  className: g.formInput,
                                  children: (0, a.jsx)(l.SingleSelect, {
                                    value: J,
                                    options: C,
                                    onChange: (e) => $(e),
                                  }),
                                }),
                                (0, a.jsx)(l.FormItem, {
                                  title: T.Z.Messages.BUG_REPORT_OS_VERSION,
                                  className: g.formInput,
                                  children: (0, a.jsx)(l.TextInput, {
                                    placeholder: "Operating System Version",
                                    value: ee,
                                    onChange: (e) => et(e),
                                  }),
                                }),
                                (0, a.jsx)(l.FormItem, {
                                  title: T.Z.Messages.BUG_REPORT_CLIENT_VERSION,
                                  className: g.formInput,
                                  children: (0, a.jsx)(l.TextInput, {
                                    placeholder: "Client Version",
                                    value: en,
                                    onChange: (e) => ea(e),
                                  }),
                                }),
                                (0, a.jsx)(l.FormItem, {
                                  title:
                                    T.Z.Messages.BUG_REPORT_CLIENT_BUILD_NUMBER,
                                  className: g.formInput,
                                  children: (0, a.jsx)(l.TextInput, {
                                    placeholder: "Client Build Number",
                                    value: er,
                                    onChange: (e) => ei(e),
                                  }),
                                }),
                                (0, a.jsx)(l.FormItem, {
                                  title: T.Z.Messages.BUG_REPORT_LOCALE,
                                  className: g.formInput,
                                  children: (0, a.jsx)(l.TextInput, {
                                    placeholder: "Locale",
                                    value: eo,
                                    onChange: (e) => es(e),
                                  }),
                                }),
                              ],
                            })
                          : null,
                        (0, a.jsxs)(l.Button, {
                          className: g.uploadButton,
                          children: [
                            T.Z.Messages.BUG_REPORT_ADD_ATTACHMENTS,
                            (0, a.jsx)(c.Z, {
                              ref: b,
                              onChange: (e) => {
                                var t, n;
                                (null === (n = e.currentTarget) || void 0 === n
                                  ? void 0
                                  : null === (t = n.files) || void 0 === t
                                    ? void 0
                                    : t[0]) != null &&
                                  V([
                                    ...k,
                                    ...Array.from(e.currentTarget.files).map(
                                      (e) =>
                                        new u.ZP({
                                          id: (0, i.Z)(),
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
                        k.length > 0
                          ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                (0, a.jsx)("div", {
                                  className: g.imageOptionsContainer,
                                  children: (0, a.jsx)(l.FormTitle, {
                                    children: "Preview",
                                  }),
                                }),
                                (0, a.jsx)("div", {
                                  ref: Z,
                                  className: g.attachmentsGrid,
                                  children:
                                    k.length > 0 &&
                                    k.map((e) =>
                                      (0, a.jsxs)(
                                        "div",
                                        {
                                          className: g.attachmentsGridItem,
                                          children: [
                                            (0, a.jsx)(l.Text, {
                                              variant: "text-sm/normal",
                                              children: e.filename,
                                            }),
                                            (0, a.jsxs)("div", {
                                              className: g.attachmentContainer,
                                              children: [
                                                (0, a.jsx)(d.r, { upload: e }),
                                                (0, a.jsx)("div", {
                                                  className: g.toolBar,
                                                  children: (0, a.jsx)(h.ZP, {
                                                    children: (0, a.jsx)(m.Z, {
                                                      tooltip:
                                                        T.Z.Messages
                                                          .ATTACHMENT_UTILITIES_REMOVE,
                                                      onClick: () => ev(e.id),
                                                      dangerous: !0,
                                                      children: (0, a.jsx)(
                                                        l.TrashIcon,
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
                          ? (0, a.jsx)(l.Text, {
                              color: "text-danger",
                              variant: "text-sm/normal",
                              children: "Something went wrong, try again!",
                            })
                          : null,
                      ],
                    }),
                    (0, a.jsxs)(l.ModalFooter, {
                      className: g.submitContainer,
                      children: [
                        (0, a.jsx)(l.Button, {
                          className: g.formButton,
                          look: l.ButtonLooks.BLANK,
                          onClick: ef,
                          children: (0, a.jsx)(l.Text, {
                            variant: "text-sm/normal",
                            children: T.Z.Messages.CANCEL,
                          }),
                        }),
                        (0, a.jsx)(l.Button, {
                          submitting: eu,
                          className: g.formButton,
                          onClick: eI,
                          children: "Submit and Open Report",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          }),
        });
      }
    },
    549667: function (e, t, n) {
      e.exports = {
        modalRoot: "modalRoot_d76ce1",
        modalContent: "modalContent_d76ce1",
        sidebarContainer: "sidebarContainer_d76ce1",
        contentContainer: "contentContainer_d76ce1",
        contentIcon: "contentIcon_d76ce1",
        form: "form_d76ce1",
        formInput: "formInput_d76ce1",
        formPriorityImageContainer: "formPriorityImageContainer_d76ce1",
        formPriorityTitleContainer: "formPriorityTitleContainer_d76ce1",
        formPriorityTitle: "formPriorityTitle_d76ce1",
        formPriorityDescription: "formPriorityDescription_d76ce1",
        formPriorityImage: "formPriorityImage_d76ce1",
        container: "container_d76ce1",
        formButton: "formButton_d76ce1",
        imageOptionsContainer: "imageOptionsContainer_d76ce1",
        attachmentsGrid: "attachmentsGrid_d76ce1",
        attachmentsGridItem: "attachmentsGridItem_d76ce1",
        toolBar: "toolBar_d76ce1",
        attachmentContainer: "attachmentContainer_d76ce1",
        uploadButton: "uploadButton_d76ce1",
        submitContainer: "submitContainer_d76ce1",
      };
    },
  },
]);
//# sourceMappingURL=005aab1f238cffca4a6c.js.map
