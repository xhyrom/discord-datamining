"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["226"],
  {
    689241: function (e, t, s) {
      s.d(t, {
        q: function () {
          return r;
        },
      });
      var a = s(544891),
        l = s(570140),
        n = s(173747),
        i = s(981631);
      async function r(e, t, s, r) {
        if (!!n.Z.needsToFetchBuildSize(s)) {
          l.Z.dispatch({
            type: "APPLICATION_BUILD_SIZE_FETCH_START",
            buildId: s,
          });
          try {
            let n = await a.tn.post({
              url: i.ANM.APPLICATION_BUILD_SIZE(e, t, s),
              body: { manifest_ids: r },
              oldFormErrors: !0,
            });
            l.Z.dispatch({
              type: "APPLICATION_BUILD_SIZE_FETCH_SUCCESS",
              buildId: s,
              sizeKB: n.body.size_kb,
            });
          } catch (e) {
            l.Z.dispatch({
              type: "APPLICATION_BUILD_SIZE_FETCH_FAIL",
              buildId: s,
            });
          }
        }
      }
    },
    447273: function (e, t, s) {
      s.d(t, {
        B: function () {
          return l;
        },
        D: function () {
          return n;
        },
      });
      var a = s(570140);
      function l() {
        a.Z.dispatch({ type: "APPLICATION_STORE_ACCEPT_STORE_TERMS" });
      }
      function n(e) {
        a.Z.dispatch({ type: "APPLICATION_STORE_ACCEPT_EULA", eulaId: e });
      }
    },
    325432: function (e, t, s) {
      s.d(t, {
        RY: function () {
          return n;
        },
        Tb: function () {
          return r;
        },
        ec: function () {
          return o;
        },
        iD: function () {
          return i;
        },
      }),
        s(47120);
      var a = s(570140),
        l = s(830168);
      function n(e) {
        l.Z.queryDirectory(e, (t, s) => {
          if (null == t && null != s)
            a.Z.dispatch({
              type: "INSTALLATION_LOCATION_ADD",
              path: e,
              metadata: s,
            });
        });
      }
      function i(e) {
        a.Z.dispatch({ type: "INSTALLATION_LOCATION_REMOVE", path: e });
      }
      function r(e, t) {
        let { label: s, isDefault: l } = t;
        a.Z.dispatch({
          type: "INSTALLATION_LOCATION_UPDATE",
          path: e,
          label: s,
          isDefault: l,
        });
      }
      function o(e) {
        let t = {},
          s = 0;
        for (let n of e) {
          if (null != n && "string" == typeof n)
            l.Z.queryDirectory(n, (l, i) => {
              ++s,
                null == l && null != i && (t[n] = i),
                s === e.length &&
                  a.Z.dispatch({
                    type: "INSTALLATION_LOCATION_FETCH_METADATA",
                    metadataPayload: t,
                  });
            });
        }
      }
    },
    672971: function (e, t, s) {
      s(411104), s(47120);
      var a = s(735250),
        l = s(470079),
        n = s(120356),
        i = s.n(n),
        r = s(512722),
        o = s.n(r),
        c = s(442837),
        h = s(481060),
        d = s(850840),
        u = s(63063),
        p = s(74538),
        I = s(981631),
        A = s(474936),
        L = s(689938),
        _ = s(961667);
      function T(e, t, s) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: s,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = s),
          e
        );
      }
      class N extends l.Component {
        componentDidMount() {
          this.props.onChange(
            this.hasAcceptedNeccessaryTerms(this.props, this.state),
          );
        }
        componentDidUpdate(e, t) {
          let s = this.hasAcceptedNeccessaryTerms(e, t),
            a = this.hasAcceptedNeccessaryTerms(this.props, this.state);
          a !== s && this.props.onChange(a);
        }
        hasAcceptedNeccessaryTerms(e, t) {
          return (
            (null == e.eulaId || t.hasAcceptedEULA) &&
            (!e.showWithdrawalWaiver || t.hasAcceptedWithdrawalWaiver)
          );
        }
        formatInterval(e) {
          if (e === A.rV.YEAR)
            return L.Z.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_YEAR;
          if (e === A.rV.MONTH)
            return L.Z.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_MONTH;
          throw Error("Invalid interval type: ".concat(e));
        }
        render() {
          let {
              eulaId: e,
              applicationName: t,
              hasPreviouslyAcceptedEULA: l,
              forceShow: n,
              disabled: r,
              className: c,
              checkboxClassname: d,
              checkboxLabelClassname: A,
              finePrint: T,
              showPricingLink: N,
              showWithdrawalWaiver: m,
              isTrial: f,
              inReverseTrial: E,
              isDiscount: P,
              subscriptionPlan: C,
              finePrintClassname: g,
            } = this.props,
            { hasAcceptedEULA: S, hasAcceptedWithdrawalWaiver: O } = this.state;
          return (o()(
            !f || null != C,
            "subscriptionPlan cannot be null if shouldShowUpdatedPaymentModal is true",
          ),
          n || (null != e && !l) || m)
            ? (0, a.jsxs)("div", {
                className: c,
                children: [
                  m &&
                    (0, a.jsx)(h.FormTitle, {
                      className: _.formTitle,
                      children: L.Z.Messages.BILLING_ONLINE_PURCHASE_WAIVER,
                    }),
                  null != e && (n || !l)
                    ? (0, a.jsx)(h.Checkbox, {
                        type: h.Checkbox.Types.INVERTED,
                        value: S,
                        onChange: this.handleToggleEULAAcceptance,
                        disabled: r,
                        className: _.checkbox,
                        children: (0, a.jsx)("div", {
                          className: _.checkboxLabel,
                          children:
                            L.Z.Messages.BILLING_THIRD_PARTY_EULA_LABEL.format({
                              applicationName: t,
                              onClick: (t) => {
                                (0, h.openModalLazy)(async () => {
                                  let { default: t } = await s
                                    .e("51868")
                                    .then(s.bind(s, 796504));
                                  return (s) =>
                                    (0, a.jsx)(t, { eulaId: e, ...s });
                                }),
                                  t.preventDefault();
                              },
                            }),
                        }),
                      })
                    : null,
                  null == T
                    ? null
                    : (0, a.jsx)("div", {
                        className: i()(_.finePrint, g),
                        children: T,
                      }),
                  m
                    ? (0, a.jsxs)("div", {
                        className: c,
                        children: [
                          (0, a.jsx)(h.Checkbox, {
                            type: h.Checkbox.Types.INVERTED,
                            value: O,
                            onChange:
                              this.handleToggleEUWithdralWaiverAcceptance,
                            disabled: r,
                            className: i()(_.checkbox, d),
                            children: (0, a.jsx)("div", {
                              className: i()(_.checkboxLabel, A),
                              children:
                                L.Z.Messages
                                  .BILLING_ONLINE_PURCHASE_WAIVER_CHECKBOX,
                            }),
                          }),
                          (0, a.jsx)("div", {
                            className: _.finePrint,
                            children:
                              L.Z.Messages
                                .BILLING_ONLINE_PURCHASE_WAIVER_DISCLAIMER,
                          }),
                        ],
                      })
                    : null,
                  N &&
                    (0, a.jsxs)("div", {
                      className: _.finePrint,
                      children: [
                        "*",
                        L.Z.Messages.BILLING_HOW_PRICING_WORKS.format({
                          documentationLink: u.Z.getArticleURL(
                            I.BhN.LOCALIZED_PRICING,
                          ),
                        }),
                      ],
                    }),
                  f &&
                    null != C &&
                    (0, a.jsx)(h.Text, {
                      variant: "text-xs/medium",
                      color: "interactive-normal",
                      children: L.Z.Messages.BILLING_TRIAL_LEGAL_COPY_V2.format(
                        {
                          buttonText: (0, p.W_)(null, C),
                          interval: this.formatInterval(
                            null == C ? void 0 : C.interval,
                          ),
                          cancelSubscriptionArticle: u.Z.getArticleURL(
                            I.BhN.PREMIUM_DETAILS_CANCEL_SUB,
                          ),
                          paidServiceTermsArticle: u.Z.getArticleURL(
                            I.BhN.PAID_TERMS,
                          ),
                        },
                      ),
                    }),
                  E &&
                    null != C &&
                    (0, a.jsx)(h.Text, {
                      variant: "text-xs/medium",
                      color: "interactive-normal",
                      children:
                        L.Z.Messages.BILLING_REVERSE_TRIAL_LEGAL_COPY.format({
                          buttonText: (0, p.W_)(null, C),
                          interval: this.formatInterval(
                            null == C ? void 0 : C.interval,
                          ),
                          cancelSubscriptionArticle: u.Z.getArticleURL(
                            I.BhN.PREMIUM_DETAILS_CANCEL_SUB,
                          ),
                          paidServiceTermsArticle: u.Z.getArticleURL(
                            I.BhN.PAID_TERMS,
                          ),
                        }),
                    }),
                  P &&
                    null != C &&
                    (0, a.jsx)(h.Text, {
                      variant: "text-xs/medium",
                      color: "interactive-normal",
                      children: L.Z.Messages.BILLING_DISCOUNT_LEGAL_COPY.format(
                        {
                          buttonText: (0, p.W_)(null, C),
                          interval: this.formatInterval(
                            null == C ? void 0 : C.interval,
                          ),
                          cancelSubscriptionArticle: u.Z.getArticleURL(
                            I.BhN.PREMIUM_DETAILS_CANCEL_SUB,
                          ),
                          paidServiceTermsArticle: u.Z.getArticleURL(
                            I.BhN.PAID_TERMS,
                          ),
                        },
                      ),
                    }),
                ],
              })
            : null;
        }
        constructor(...e) {
          super(...e),
            T(this, "state", {
              hasAcceptedEULA:
                !this.props.forceShow && this.props.hasPreviouslyAcceptedEULA,
              hasAcceptedWithdrawalWaiver: !1,
            }),
            T(this, "handleToggleEUWithdralWaiverAcceptance", (e, t) => {
              this.setState({ hasAcceptedWithdrawalWaiver: t });
            }),
            T(this, "handleToggleEULAAcceptance", (e, t) => {
              this.setState({ hasAcceptedEULA: t });
            });
        }
      }
      t.Z = c.ZP.connectStores([d.Z], (e) => {
        let { eulaId: t } = e;
        return {
          hasPreviouslyAcceptedEULA: null != t && d.Z.hasAcceptedEULA(t),
        };
      })(N);
    },
    472064: function (e, t, s) {
      s.r(t), s(47120), s(411104);
      var a = s(735250),
        l = s(470079),
        n = s(442837),
        i = s(481060),
        r = s(570140),
        o = s(57513),
        c = s(689241),
        h = s(447273),
        d = s(51025),
        u = s(672971),
        p = s(812206),
        I = s(600164),
        A = s(925329),
        L = s(703656),
        _ = s(173747),
        T = s(850840),
        N = s(391690),
        m = s(424218),
        f = s(94692),
        E = s(981631),
        P = s(689938),
        C = s(522222);
      function g(e, t, s) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: s,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = s),
          e
        );
      }
      class S extends l.Component {
        fetchInstallSize() {
          let {
            applicationId: e,
            branchId: t,
            buildId: s,
            manifestIds: a,
            buildSizeKB: l,
          } = this.props;
          null != s &&
            null != a &&
            null == l &&
            r.Z.wait(() => {
              (0, c.q)(e, t, s, a);
            });
        }
        componentDidMount() {
          let {
            applicationId: e,
            branchId: t,
            buildId: s,
            manifestIds: a,
          } = this.props;
          null == s || null == a ? (0, o.l)(e, t) : this.fetchInstallSize();
        }
        componentDidUpdate(e) {
          (this.props.buildId !== e.buildId ||
            this.props.manifestIds !== e.manifestIds) &&
            this.fetchInstallSize();
        }
        componentWillUnmount() {
          this.isUnmounted = !0;
        }
        renderButton() {
          let { buildId: e } = this.props,
            { hasError: t, hasAcceptedNeccessaryTerms: s } = this.state;
          return (0, a.jsx)(i.Button, {
            disabled: t || null == e || !s,
            color: i.Button.Colors.GREEN,
            onClick: this.handleInstall,
            children: P.Z.Messages.GAME_ACTION_BUTTON_INSTALL,
          });
        }
        render() {
          let {
              application: e,
              buildSizeKB: t,
              transitionState: s,
            } = this.props,
            { selectedInstallationPath: l, isInstalling: n } = this.state,
            r = null != e && e.getSplashURL(440);
          return (0, a.jsxs)(i.ModalRoot, {
            transitionState: s,
            size: i.ModalSize.SMALL,
            "aria-label": P.Z.Messages.APPLICATION_INSTALLATION_MODAL_TITLE,
            children: [
              null != r
                ? (0, a.jsx)("div", {
                    className: C.splash,
                    style: { backgroundImage: "url(".concat(r, ")") },
                  })
                : null,
              (0, a.jsxs)(i.ModalHeader, {
                justify: I.Z.Justify.BETWEEN,
                children: [
                  (0, a.jsx)(I.Z.Child, {
                    grow: 1,
                    children: (0, a.jsx)(i.Heading, {
                      variant: "heading-lg/semibold",
                      children:
                        P.Z.Messages.APPLICATION_INSTALLATION_MODAL_TITLE,
                    }),
                  }),
                  (0, a.jsx)(I.Z.Child, {
                    grow: 0,
                    children: (0, a.jsx)(i.ModalCloseButton, {
                      onClick: this.close,
                    }),
                  }),
                ],
              }),
              (0, a.jsxs)(i.ModalContent, {
                children: [
                  (0, a.jsxs)(I.Z, {
                    align: I.Z.Align.CENTER,
                    children: [
                      (0, a.jsx)(A.Z, {
                        game: e,
                        size: A.Z.Sizes.MEDIUM,
                        className: C.gameIcon,
                      }),
                      (0, a.jsx)("div", {
                        className: C.gameName,
                        children: null != e && e.name,
                      }),
                      null != t
                        ? (0, a.jsx)("div", {
                            className: C.installSize,
                            children: (0, m.BU)(t, { useKibibytes: !0 }),
                          })
                        : null,
                    ],
                  }),
                  (0, a.jsx)("div", { className: C.divider }),
                  (0, a.jsx)(f.Z, {
                    autoFocus: !0,
                    className: C.selector,
                    value: l,
                    requiredDiskKB: t,
                    onChange: this.handleChangePath,
                  }),
                  (0, a.jsx)(u.Z, {
                    eulaId: e.eulaId,
                    applicationName: e.name,
                    disabled: n,
                    onChange: this.handlePurchaseTermsChange,
                    className: C.terms,
                  }),
                ],
              }),
              (0, a.jsx)(i.ModalFooter, { children: this.renderButton() }),
            ],
          });
        }
        constructor(...e) {
          super(...e),
            g(this, "state", {
              selectedInstallationPath: this.props.defaultInstallationPath,
              hasError: !1,
              isInstalling: !1,
              hasAcceptedNeccessaryTerms: !1,
            }),
            g(this, "isUnmounted", !1),
            g(this, "handleChangePath", (e, t) => {
              this.setState({ selectedInstallationPath: e, hasError: t });
            }),
            g(this, "install", (e, t) => {
              let {
                application: s,
                branchId: a,
                analyticsLocation: l,
              } = this.props;
              if (null == s) return null;
              (0, d.LO)({
                application: s,
                branchId: a,
                buildId: e,
                manifestIds: t,
                installationPath: this.state.selectedInstallationPath,
                analyticsLocation: l,
              }),
                (0, L.uL)(E.Z5c.APPLICATION_LIBRARY),
                this.close();
            }),
            g(this, "handleInstall", () => {
              let {
                application: e,
                buildId: t,
                manifestIds: s,
                hasPreviouslyAcceptedStoreTerms: a,
              } = this.props;
              if (null != t && null != s)
                !a && (0, h.B)(),
                  null != e && null != e.eulaId && (0, h.D)(e.eulaId),
                  this.install(t, s);
              else
                throw Error(
                  "Unexpected missing build info for non-premium product",
                );
            }),
            g(this, "handlePurchaseTermsChange", (e) => {
              this.setState({ hasAcceptedNeccessaryTerms: e });
            }),
            g(this, "close", () => {
              this.props.onClose();
            });
        }
      }
      t.default = n.ZP.connectStores([_.Z, N.Z, T.Z, p.Z], (e) => {
        let { applicationId: t, branchId: s } = e,
          a = _.Z.getTargetBuildId(t, s);
        return {
          application: p.Z.getApplication(t),
          defaultInstallationPath: N.Z.defaultInstallationPath,
          buildId: a,
          manifestIds: _.Z.getTargetManifests(t, s),
          buildSizeKB: null != a ? _.Z.getBuildSize(a) : null,
          hasPreviouslyAcceptedStoreTerms: T.Z.hasAcceptedStoreTerms,
        };
      })(S);
    },
    94692: function (e, t, s) {
      s(653041), s(47120);
      var a = s(735250),
        l = s(470079),
        n = s(442837),
        i = s(481060),
        r = s(325432),
        o = s(391690),
        c = s(424218),
        h = s(998502),
        d = s(689938),
        u = s(346438);
      function p(e, t, s) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: s,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = s),
          e
        );
      }
      let I = "select";
      class A extends l.PureComponent {
        fetchAllDirectoryMetadata() {
          let { installationPaths: e } = this.props,
            t = e.map((e) => {
              let { path: t } = e;
              return t;
            }),
            { newInstallationPath: s } = this.state;
          for (let e of (null != s && t.push(s),
          (t = t.filter((e) => !this.fetchedMetadataPaths.has(e))),
          (0, r.ec)(t),
          t))
            this.fetchedMetadataPaths.add(e);
        }
        componentDidMount() {
          this.fetchAllDirectoryMetadata();
        }
        componentDidUpdate(e) {
          this.fetchAllDirectoryMetadata(),
            (this.props.requiredDiskKB !== e.requiredDiskKB ||
              this.props.installationPathsMetadata !==
                e.installationPathsMetadata) &&
              this.sendChange(this.props.value);
        }
        getOptions() {
          let { installationPaths: e } = this.props,
            { newInstallationPath: t } = this.state,
            s = e.map((e) => {
              let { path: t, label: s } = e;
              return { value: t, label: this.renderLabel(t, s) };
            });
          return (
            null != t && s.push({ value: t, label: this.renderLabel(t) }),
            s.push({
              value: I,
              label:
                d.Z.Messages.APPLICATION_INSTALLATION_MODAL_SELECT_DIRECTORY,
            }),
            s
          );
        }
        hasEnoughDiskSpace(e) {
          let { requiredDiskKB: t, installationPathsMetadata: s } = this.props,
            a = null != s[e] ? s[e].availableKB : null;
          return null == t || null == a || t < a;
        }
        sendChange(e) {
          let { installationPathsMetadata: t, onChange: s } = this.props,
            a = null != t[e] && !1 === t[e].hasPermission;
          s(e, a || !this.hasEnoughDiskSpace(e));
        }
        renderError() {
          let { value: e, installationPathsMetadata: t } = this.props;
          return null != t[e] && !1 === t[e].hasPermission
            ? (0, a.jsx)("div", {
                className: u.error,
                children:
                  d.Z.Messages.APPLICATION_INSTALLATION_MODAL_NO_PERMISSION,
              })
            : this.hasEnoughDiskSpace(e)
              ? null
              : (0, a.jsx)("div", {
                  className: u.error,
                  children:
                    d.Z.Messages
                      .APPLICATION_INSTALLATION_MODAL_NOT_ENOUGH_SPACE,
                });
        }
        renderLabel(e, t) {
          let { installationPathsMetadata: s } = this.props,
            a = null != t ? t : e;
          return null != s[e] && null != s[e].availableKB
            ? d.Z.Messages.APPLICATION_INSTALLATION_MODAL_DIRECTORY_WITH_SPACE.format(
                {
                  path: a,
                  size: (0, c.BU)(s[e].availableKB, { useKibibytes: !0 }),
                },
              )
            : a;
        }
        render() {
          let { value: e, className: t, autoFocus: s } = this.props;
          return (0, a.jsxs)("div", {
            className: t,
            children: [
              (0, a.jsx)(i.FormTitle, {
                tag: "h5",
                children: d.Z.Messages.APPLICATION_INSTALLATION_MODAL_LOCATION,
              }),
              (0, a.jsx)(i.SingleSelect, {
                autoFocus: s,
                options: this.getOptions(),
                value: e,
                onChange: this.handleChange,
              }),
              this.renderError(),
            ],
          });
        }
        constructor(...e) {
          super(...e),
            p(this, "state", { newInstallationPath: null }),
            p(this, "fetchedMetadataPaths", new Set()),
            p(this, "handleChange", (e) => {
              e === I
                ? h.ZP.showOpenDialog(["openDirectory"]).then((e) => {
                    if (null != e && e.length > 0) {
                      let t = e[0];
                      this.setState({
                        newInstallationPath:
                          null !=
                          this.props.installationPaths.find((e) => {
                            let { path: s } = e;
                            return s === t;
                          })
                            ? null
                            : t,
                      }),
                        this.sendChange(t);
                    }
                  })
                : this.sendChange(e);
            });
        }
      }
      t.Z = n.ZP.connectStores([o.Z], () => ({
        installationPaths: o.Z.installationPaths,
        installationPathsMetadata: o.Z.installationPathsMetadata,
      }))(A);
    },
    961667: function (e, t, s) {
      e.exports = {
        formTitle: "formTitle_e5aa30",
        checkbox: "checkbox_e5aa30",
        checkboxLabel: "checkboxLabel_e5aa30",
        finePrint: "finePrint_e5aa30",
      };
    },
    522222: function (e, t, s) {
      e.exports = {
        splash: "splash_fd3088",
        gameIcon: "gameIcon_fd3088",
        gameName: "gameName_fd3088",
        installSize: "installSize_fd3088",
        divider: "divider_fd3088",
        selector: "selector_fd3088",
        terms: "terms_fd3088",
      };
    },
    346438: function (e, t, s) {
      e.exports = { error: "error_da3dfb" };
    },
  },
]);
//# sourceMappingURL=4c58a2fdcdb53b496da7.js.map
