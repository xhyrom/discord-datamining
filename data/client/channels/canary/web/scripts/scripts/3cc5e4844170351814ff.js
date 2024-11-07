"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["226"],
  {
    689241: function (t, e, n) {
      n.d(e, {
        q: function () {
          return r;
        },
      });
      var l = n(544891),
        i = n(570140),
        s = n(173747),
        a = n(981631);
      async function r(t, e, n, r) {
        if (!!s.Z.needsToFetchBuildSize(n)) {
          i.Z.dispatch({
            type: "APPLICATION_BUILD_SIZE_FETCH_START",
            buildId: n,
          });
          try {
            let s = await l.tn.post({
              url: a.ANM.APPLICATION_BUILD_SIZE(t, e, n),
              body: { manifest_ids: r },
              oldFormErrors: !0,
            });
            i.Z.dispatch({
              type: "APPLICATION_BUILD_SIZE_FETCH_SUCCESS",
              buildId: n,
              sizeKB: s.body.size_kb,
            });
          } catch (t) {
            i.Z.dispatch({
              type: "APPLICATION_BUILD_SIZE_FETCH_FAIL",
              buildId: n,
            });
          }
        }
      }
    },
    447273: function (t, e, n) {
      n.d(e, {
        B: function () {
          return i;
        },
        D: function () {
          return s;
        },
      });
      var l = n(570140);
      function i() {
        l.Z.dispatch({ type: "APPLICATION_STORE_ACCEPT_STORE_TERMS" });
      }
      function s(t) {
        l.Z.dispatch({ type: "APPLICATION_STORE_ACCEPT_EULA", eulaId: t });
      }
    },
    325432: function (t, e, n) {
      n.d(e, {
        RY: function () {
          return s;
        },
        Tb: function () {
          return r;
        },
        ec: function () {
          return o;
        },
        iD: function () {
          return a;
        },
      }),
        n(47120);
      var l = n(570140),
        i = n(830168);
      function s(t) {
        i.Z.queryDirectory(t, (e, n) => {
          if (null == e && null != n)
            l.Z.dispatch({
              type: "INSTALLATION_LOCATION_ADD",
              path: t,
              metadata: n,
            });
        });
      }
      function a(t) {
        l.Z.dispatch({ type: "INSTALLATION_LOCATION_REMOVE", path: t });
      }
      function r(t, e) {
        let { label: n, isDefault: i } = e;
        l.Z.dispatch({
          type: "INSTALLATION_LOCATION_UPDATE",
          path: t,
          label: n,
          isDefault: i,
        });
      }
      function o(t) {
        let e = {},
          n = 0;
        for (let s of t) {
          if (null != s && "string" == typeof s)
            i.Z.queryDirectory(s, (i, a) => {
              ++n,
                null == i && null != a && (e[s] = a),
                n === t.length &&
                  l.Z.dispatch({
                    type: "INSTALLATION_LOCATION_FETCH_METADATA",
                    metadataPayload: e,
                  });
            });
        }
      }
    },
    672971: function (t, e, n) {
      n(411104), n(47120);
      var l = n(200651),
        i = n(192379),
        s = n(120356),
        a = n.n(s),
        r = n(512722),
        o = n.n(r),
        c = n(442837),
        h = n(481060),
        d = n(850840),
        u = n(63063),
        p = n(74538),
        m = n(981631),
        f = n(474936),
        A = n(388032),
        I = n(451614);
      function g(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      class T extends i.Component {
        componentDidMount() {
          this.props.onChange(
            this.hasAcceptedNeccessaryTerms(this.props, this.state),
          );
        }
        componentDidUpdate(t, e) {
          let n = this.hasAcceptedNeccessaryTerms(t, e),
            l = this.hasAcceptedNeccessaryTerms(this.props, this.state);
          l !== n && this.props.onChange(l);
        }
        hasAcceptedNeccessaryTerms(t, e) {
          return (
            (null == t.eulaId || e.hasAcceptedEULA) &&
            (!t.showWithdrawalWaiver || e.hasAcceptedWithdrawalWaiver)
          );
        }
        formatInterval(t) {
          if (t === f.rV.YEAR) return A.intl.string(A.t.tfqrho);
          if (t === f.rV.MONTH) return A.intl.string(A.t.FPybU1);
          throw Error("Invalid interval type: ".concat(t));
        }
        render() {
          let {
              eulaId: t,
              applicationName: e,
              hasPreviouslyAcceptedEULA: i,
              forceShow: s,
              disabled: r,
              className: c,
              checkboxClassname: d,
              checkboxLabelClassname: f,
              finePrint: g,
              showPricingLink: T,
              showWithdrawalWaiver: v,
              isTrial: b,
              inReverseTrial: P,
              isDiscount: N,
              subscriptionPlan: x,
              finePrintClassname: L,
            } = this.props,
            { hasAcceptedEULA: C, hasAcceptedWithdrawalWaiver: E } = this.state;
          return (o()(
            !b || null != x,
            "subscriptionPlan cannot be null if shouldShowUpdatedPaymentModal is true",
          ),
          s || (null != t && !i) || v)
            ? (0, l.jsxs)("div", {
                className: c,
                children: [
                  v &&
                    (0, l.jsx)(h.FormTitle, {
                      className: I.formTitle,
                      children: A.intl.string(A.t.Ogvn5u),
                    }),
                  null != t && (s || !i)
                    ? (0, l.jsx)(h.Checkbox, {
                        type: h.Checkbox.Types.INVERTED,
                        value: C,
                        onChange: this.handleToggleEULAAcceptance,
                        disabled: r,
                        className: I.checkbox,
                        children: (0, l.jsx)("div", {
                          className: I.checkboxLabel,
                          children: A.intl.format(A.t.IodJKS, {
                            applicationName: e,
                            onClick: (e) => {
                              (0, h.openModalLazy)(async () => {
                                let { default: e } = await n
                                  .e("51868")
                                  .then(n.bind(n, 796504));
                                return (n) =>
                                  (0, l.jsx)(e, { eulaId: t, ...n });
                              }),
                                e.preventDefault();
                            },
                          }),
                        }),
                      })
                    : null,
                  null == g
                    ? null
                    : (0, l.jsx)("div", {
                        className: a()(I.finePrint, L),
                        children: g,
                      }),
                  v
                    ? (0, l.jsxs)("div", {
                        className: c,
                        children: [
                          (0, l.jsx)(h.Checkbox, {
                            type: h.Checkbox.Types.INVERTED,
                            value: E,
                            onChange:
                              this.handleToggleEUWithdralWaiverAcceptance,
                            disabled: r,
                            className: a()(I.checkbox, d),
                            children: (0, l.jsx)("div", {
                              className: a()(I.checkboxLabel, f),
                              children: A.intl.string(A.t.DFCVNz),
                            }),
                          }),
                          (0, l.jsx)("div", {
                            className: I.finePrint,
                            children: A.intl.string(A.t.jhu6zs),
                          }),
                        ],
                      })
                    : null,
                  T &&
                    (0, l.jsxs)("div", {
                      className: I.finePrint,
                      children: [
                        "*",
                        A.intl.format(A.t["5zmY3N"], {
                          documentationLink: u.Z.getArticleURL(
                            m.BhN.LOCALIZED_PRICING,
                          ),
                        }),
                      ],
                    }),
                  b &&
                    null != x &&
                    (0, l.jsx)(h.Text, {
                      variant: "text-xs/medium",
                      color: "interactive-normal",
                      children: A.intl.format(A.t["Hvo/Z2"], {
                        buttonText: (0, p.W_)(null, x),
                        interval: this.formatInterval(
                          null == x ? void 0 : x.interval,
                        ),
                        cancelSubscriptionArticle: u.Z.getArticleURL(
                          m.BhN.PREMIUM_DETAILS_CANCEL_SUB,
                        ),
                        paidServiceTermsArticle: u.Z.getArticleURL(
                          m.BhN.PAID_TERMS,
                        ),
                      }),
                    }),
                  P &&
                    null != x &&
                    (0, l.jsx)(h.Text, {
                      variant: "text-xs/medium",
                      color: "interactive-normal",
                      children: A.intl.format(A.t.Oo2FeX, {
                        buttonText: (0, p.W_)(null, x),
                        interval: this.formatInterval(
                          null == x ? void 0 : x.interval,
                        ),
                        cancelSubscriptionArticle: u.Z.getArticleURL(
                          m.BhN.PREMIUM_DETAILS_CANCEL_SUB,
                        ),
                        paidServiceTermsArticle: u.Z.getArticleURL(
                          m.BhN.PAID_TERMS,
                        ),
                      }),
                    }),
                  N &&
                    null != x &&
                    (0, l.jsx)(h.Text, {
                      variant: "text-xs/medium",
                      color: "interactive-normal",
                      children: A.intl.format(A.t["Z2c+aW"], {
                        buttonText: (0, p.W_)(null, x),
                        interval: this.formatInterval(
                          null == x ? void 0 : x.interval,
                        ),
                        cancelSubscriptionArticle: u.Z.getArticleURL(
                          m.BhN.PREMIUM_DETAILS_CANCEL_SUB,
                        ),
                        paidServiceTermsArticle: u.Z.getArticleURL(
                          m.BhN.PAID_TERMS,
                        ),
                      }),
                    }),
                ],
              })
            : null;
        }
        constructor(...t) {
          super(...t),
            g(this, "state", {
              hasAcceptedEULA:
                !this.props.forceShow && this.props.hasPreviouslyAcceptedEULA,
              hasAcceptedWithdrawalWaiver: !1,
            }),
            g(this, "handleToggleEUWithdralWaiverAcceptance", (t, e) => {
              this.setState({ hasAcceptedWithdrawalWaiver: e });
            }),
            g(this, "handleToggleEULAAcceptance", (t, e) => {
              this.setState({ hasAcceptedEULA: e });
            });
        }
      }
      e.Z = c.ZP.connectStores([d.Z], (t) => {
        let { eulaId: e } = t;
        return {
          hasPreviouslyAcceptedEULA: null != e && d.Z.hasAcceptedEULA(e),
        };
      })(T);
    },
    472064: function (t, e, n) {
      n.r(e), n(47120), n(411104);
      var l = n(200651),
        i = n(192379),
        s = n(442837),
        a = n(481060),
        r = n(570140),
        o = n(57513),
        c = n(689241),
        h = n(447273),
        d = n(51025),
        u = n(672971),
        p = n(812206),
        m = n(600164),
        f = n(925329),
        A = n(703656),
        I = n(173747),
        g = n(850840),
        T = n(391690),
        v = n(424218),
        b = n(94692),
        P = n(981631),
        N = n(388032),
        x = n(891125);
      function L(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      class C extends i.Component {
        fetchInstallSize() {
          let {
            applicationId: t,
            branchId: e,
            buildId: n,
            manifestIds: l,
            buildSizeKB: i,
          } = this.props;
          null != n &&
            null != l &&
            null == i &&
            r.Z.wait(() => {
              (0, c.q)(t, e, n, l);
            });
        }
        componentDidMount() {
          let {
            applicationId: t,
            branchId: e,
            buildId: n,
            manifestIds: l,
          } = this.props;
          null == n || null == l ? (0, o.l)(t, e) : this.fetchInstallSize();
        }
        componentDidUpdate(t) {
          (this.props.buildId !== t.buildId ||
            this.props.manifestIds !== t.manifestIds) &&
            this.fetchInstallSize();
        }
        componentWillUnmount() {
          this.isUnmounted = !0;
        }
        renderButton() {
          let { buildId: t } = this.props,
            { hasError: e, hasAcceptedNeccessaryTerms: n } = this.state;
          return (0, l.jsx)(a.Button, {
            disabled: e || null == t || !n,
            color: a.Button.Colors.GREEN,
            onClick: this.handleInstall,
            children: N.intl.string(N.t.nL0WvL),
          });
        }
        render() {
          let {
              application: t,
              buildSizeKB: e,
              transitionState: n,
            } = this.props,
            { selectedInstallationPath: i, isInstalling: s } = this.state,
            r = null != t && t.getSplashURL(440);
          return (0, l.jsxs)(a.ModalRoot, {
            transitionState: n,
            size: a.ModalSize.SMALL,
            "aria-label": N.intl.string(N.t.PphjtL),
            children: [
              null != r
                ? (0, l.jsx)("div", {
                    className: x.splash,
                    style: { backgroundImage: "url(".concat(r, ")") },
                  })
                : null,
              (0, l.jsxs)(a.ModalHeader, {
                justify: m.Z.Justify.BETWEEN,
                children: [
                  (0, l.jsx)(m.Z.Child, {
                    grow: 1,
                    children: (0, l.jsx)(a.Heading, {
                      variant: "heading-lg/semibold",
                      children: N.intl.string(N.t.PphjtL),
                    }),
                  }),
                  (0, l.jsx)(m.Z.Child, {
                    grow: 0,
                    children: (0, l.jsx)(a.ModalCloseButton, {
                      onClick: this.close,
                    }),
                  }),
                ],
              }),
              (0, l.jsxs)(a.ModalContent, {
                children: [
                  (0, l.jsxs)(m.Z, {
                    align: m.Z.Align.CENTER,
                    children: [
                      (0, l.jsx)(f.Z, {
                        game: t,
                        size: f.Z.Sizes.MEDIUM,
                        className: x.gameIcon,
                      }),
                      (0, l.jsx)("div", {
                        className: x.gameName,
                        children: null != t && t.name,
                      }),
                      null != e
                        ? (0, l.jsx)("div", {
                            className: x.installSize,
                            children: (0, v.BU)(e, { useKibibytes: !0 }),
                          })
                        : null,
                    ],
                  }),
                  (0, l.jsx)("div", { className: x.divider }),
                  (0, l.jsx)(b.Z, {
                    autoFocus: !0,
                    className: x.selector,
                    value: i,
                    requiredDiskKB: e,
                    onChange: this.handleChangePath,
                  }),
                  (0, l.jsx)(u.Z, {
                    eulaId: t.eulaId,
                    applicationName: t.name,
                    disabled: s,
                    onChange: this.handlePurchaseTermsChange,
                    className: x.terms,
                  }),
                ],
              }),
              (0, l.jsx)(a.ModalFooter, { children: this.renderButton() }),
            ],
          });
        }
        constructor(...t) {
          super(...t),
            L(this, "state", {
              selectedInstallationPath: this.props.defaultInstallationPath,
              hasError: !1,
              isInstalling: !1,
              hasAcceptedNeccessaryTerms: !1,
            }),
            L(this, "isUnmounted", !1),
            L(this, "handleChangePath", (t, e) => {
              this.setState({ selectedInstallationPath: t, hasError: e });
            }),
            L(this, "install", (t, e) => {
              let {
                application: n,
                branchId: l,
                analyticsLocation: i,
              } = this.props;
              if (null == n) return null;
              (0, d.LO)({
                application: n,
                branchId: l,
                buildId: t,
                manifestIds: e,
                installationPath: this.state.selectedInstallationPath,
                analyticsLocation: i,
              }),
                (0, A.uL)(P.Z5c.APPLICATION_LIBRARY),
                this.close();
            }),
            L(this, "handleInstall", () => {
              let {
                application: t,
                buildId: e,
                manifestIds: n,
                hasPreviouslyAcceptedStoreTerms: l,
              } = this.props;
              if (null != e && null != n)
                !l && (0, h.B)(),
                  null != t && null != t.eulaId && (0, h.D)(t.eulaId),
                  this.install(e, n);
              else
                throw Error(
                  "Unexpected missing build info for non-premium product",
                );
            }),
            L(this, "handlePurchaseTermsChange", (t) => {
              this.setState({ hasAcceptedNeccessaryTerms: t });
            }),
            L(this, "close", () => {
              this.props.onClose();
            });
        }
      }
      e.default = s.ZP.connectStores([I.Z, T.Z, g.Z, p.Z], (t) => {
        let { applicationId: e, branchId: n } = t,
          l = I.Z.getTargetBuildId(e, n);
        return {
          application: p.Z.getApplication(e),
          defaultInstallationPath: T.Z.defaultInstallationPath,
          buildId: l,
          manifestIds: I.Z.getTargetManifests(e, n),
          buildSizeKB: null != l ? I.Z.getBuildSize(l) : null,
          hasPreviouslyAcceptedStoreTerms: g.Z.hasAcceptedStoreTerms,
        };
      })(C);
    },
    94692: function (t, e, n) {
      n(653041), n(47120);
      var l = n(200651),
        i = n(192379),
        s = n(442837),
        a = n(481060),
        r = n(325432),
        o = n(391690),
        c = n(424218),
        h = n(998502),
        d = n(388032),
        u = n(125673);
      function p(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      let m = "select";
      class f extends i.PureComponent {
        fetchAllDirectoryMetadata() {
          let { installationPaths: t } = this.props,
            e = t.map((t) => {
              let { path: e } = t;
              return e;
            }),
            { newInstallationPath: n } = this.state;
          for (let t of (null != n && e.push(n),
          (e = e.filter((t) => !this.fetchedMetadataPaths.has(t))),
          (0, r.ec)(e),
          e))
            this.fetchedMetadataPaths.add(t);
        }
        componentDidMount() {
          this.fetchAllDirectoryMetadata();
        }
        componentDidUpdate(t) {
          this.fetchAllDirectoryMetadata(),
            (this.props.requiredDiskKB !== t.requiredDiskKB ||
              this.props.installationPathsMetadata !==
                t.installationPathsMetadata) &&
              this.sendChange(this.props.value);
        }
        getOptions() {
          let { installationPaths: t } = this.props,
            { newInstallationPath: e } = this.state,
            n = t.map((t) => {
              let { path: e, label: n } = t;
              return { value: e, label: this.renderLabel(e, n) };
            });
          return (
            null != e && n.push({ value: e, label: this.renderLabel(e) }),
            n.push({ value: m, label: d.intl.string(d.t["cL/rrq"]) }),
            n
          );
        }
        hasEnoughDiskSpace(t) {
          let { requiredDiskKB: e, installationPathsMetadata: n } = this.props,
            l = null != n[t] ? n[t].availableKB : null;
          return null == e || null == l || e < l;
        }
        sendChange(t) {
          let { installationPathsMetadata: e, onChange: n } = this.props,
            l = null != e[t] && !1 === e[t].hasPermission;
          n(t, l || !this.hasEnoughDiskSpace(t));
        }
        renderError() {
          let { value: t, installationPathsMetadata: e } = this.props;
          return null != e[t] && !1 === e[t].hasPermission
            ? (0, l.jsx)("div", {
                className: u.error,
                children: d.intl.string(d.t.cEUT8P),
              })
            : this.hasEnoughDiskSpace(t)
              ? null
              : (0, l.jsx)("div", {
                  className: u.error,
                  children: d.intl.string(d.t.duXbEx),
                });
        }
        renderLabel(t, e) {
          let { installationPathsMetadata: n } = this.props,
            l = null != e ? e : t;
          return null != n[t] && null != n[t].availableKB
            ? d.intl.formatToPlainString(d.t["Y+M3rq"], {
                path: l,
                size: (0, c.BU)(n[t].availableKB, { useKibibytes: !0 }),
              })
            : l;
        }
        render() {
          let { value: t, className: e, autoFocus: n } = this.props;
          return (0, l.jsxs)("div", {
            className: e,
            children: [
              (0, l.jsx)(a.FormTitle, {
                tag: "h5",
                children: d.intl.string(d.t.WTJuNj),
              }),
              (0, l.jsx)(a.SingleSelect, {
                autoFocus: n,
                options: this.getOptions(),
                value: t,
                onChange: this.handleChange,
              }),
              this.renderError(),
            ],
          });
        }
        constructor(...t) {
          super(...t),
            p(this, "state", { newInstallationPath: null }),
            p(this, "fetchedMetadataPaths", new Set()),
            p(this, "handleChange", (t) => {
              t === m
                ? h.ZP.showOpenDialog(["openDirectory"]).then((t) => {
                    if (null != t && t.length > 0) {
                      let e = t[0];
                      this.setState({
                        newInstallationPath:
                          null !=
                          this.props.installationPaths.find((t) => {
                            let { path: n } = t;
                            return n === e;
                          })
                            ? null
                            : e,
                      }),
                        this.sendChange(e);
                    }
                  })
                : this.sendChange(t);
            });
        }
      }
      e.Z = s.ZP.connectStores([o.Z], () => ({
        installationPaths: o.Z.installationPaths,
        installationPathsMetadata: o.Z.installationPathsMetadata,
      }))(f);
    },
    451614: function (t, e, n) {
      t.exports = {
        formTitle: "formTitle_e5aa30",
        checkbox: "checkbox_e5aa30",
        checkboxLabel: "checkboxLabel_e5aa30",
        finePrint: "finePrint_e5aa30",
      };
    },
    891125: function (t, e, n) {
      t.exports = {
        splash: "splash_fd3088",
        gameIcon: "gameIcon_fd3088",
        gameName: "gameName_fd3088",
        installSize: "installSize_fd3088",
        divider: "divider_fd3088",
        selector: "selector_fd3088",
        terms: "terms_fd3088",
      };
    },
    125673: function (t, e, n) {
      t.exports = { error: "error_da3dfb" };
    },
  },
]);
//# sourceMappingURL=3cc5e4844170351814ff.js.map
