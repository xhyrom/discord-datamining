"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["226"],
  {
    689241: function (e, t, n) {
      n.d(t, {
        q: function () {
          return r;
        },
      });
      var l = n(544891),
        s = n(570140),
        i = n(173747),
        a = n(981631);
      async function r(e, t, n, r) {
        if (!!i.Z.needsToFetchBuildSize(n)) {
          s.Z.dispatch({
            type: "APPLICATION_BUILD_SIZE_FETCH_START",
            buildId: n,
          });
          try {
            let i = await l.tn.post({
              url: a.ANM.APPLICATION_BUILD_SIZE(e, t, n),
              body: { manifest_ids: r },
              oldFormErrors: !0,
              rejectWithError: !0,
            });
            s.Z.dispatch({
              type: "APPLICATION_BUILD_SIZE_FETCH_SUCCESS",
              buildId: n,
              sizeKB: i.body.size_kb,
            });
          } catch (e) {
            s.Z.dispatch({
              type: "APPLICATION_BUILD_SIZE_FETCH_FAIL",
              buildId: n,
            });
          }
        }
      }
    },
    447273: function (e, t, n) {
      n.d(t, {
        B: function () {
          return s;
        },
        D: function () {
          return i;
        },
      });
      var l = n(570140);
      function s() {
        l.Z.dispatch({ type: "APPLICATION_STORE_ACCEPT_STORE_TERMS" });
      }
      function i(e) {
        l.Z.dispatch({ type: "APPLICATION_STORE_ACCEPT_EULA", eulaId: e });
      }
    },
    325432: function (e, t, n) {
      n.d(t, {
        RY: function () {
          return i;
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
        s = n(830168);
      function i(e) {
        s.Z.queryDirectory(e, (t, n) => {
          if (null == t && null != n)
            l.Z.dispatch({
              type: "INSTALLATION_LOCATION_ADD",
              path: e,
              metadata: n,
            });
        });
      }
      function a(e) {
        l.Z.dispatch({ type: "INSTALLATION_LOCATION_REMOVE", path: e });
      }
      function r(e, t) {
        let { label: n, isDefault: s } = t;
        l.Z.dispatch({
          type: "INSTALLATION_LOCATION_UPDATE",
          path: e,
          label: n,
          isDefault: s,
        });
      }
      function o(e) {
        let t = {},
          n = 0;
        for (let i of e) {
          if (null != i && "string" == typeof i)
            s.Z.queryDirectory(i, (s, a) => {
              ++n,
                null == s && null != a && (t[i] = a),
                n === e.length &&
                  l.Z.dispatch({
                    type: "INSTALLATION_LOCATION_FETCH_METADATA",
                    metadataPayload: t,
                  });
            });
        }
      }
    },
    672971: function (e, t, n) {
      n(47120);
      var l = n(200651),
        s = n(192379),
        i = n(120356),
        a = n.n(i),
        r = n(512722),
        o = n.n(r),
        c = n(442837),
        h = n(481060),
        d = n(850840),
        u = n(63063),
        p = n(74538),
        m = n(981631),
        f = n(388032),
        A = n(175782);
      function I(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      class g extends s.Component {
        componentDidMount() {
          this.props.onChange(
            this.hasAcceptedNeccessaryTerms(this.props, this.state),
          );
        }
        componentDidUpdate(e, t) {
          let n = this.hasAcceptedNeccessaryTerms(e, t),
            l = this.hasAcceptedNeccessaryTerms(this.props, this.state);
          l !== n && this.props.onChange(l);
        }
        hasAcceptedNeccessaryTerms(e, t) {
          return (
            (null == e.eulaId || t.hasAcceptedEULA) &&
            (!e.showWithdrawalWaiver || t.hasAcceptedWithdrawalWaiver)
          );
        }
        render() {
          let {
              eulaId: e,
              applicationName: t,
              hasPreviouslyAcceptedEULA: s,
              forceShow: i,
              disabled: r,
              className: c,
              checkboxClassname: d,
              checkboxLabelClassname: I,
              finePrint: g,
              showPricingLink: T,
              showWithdrawalWaiver: P,
              isTrial: b,
              inReverseTrial: v,
              isDiscount: x,
              subscriptionPlan: L,
              finePrintClassname: N,
            } = this.props,
            { hasAcceptedEULA: C, hasAcceptedWithdrawalWaiver: E } = this.state;
          return (o()(
            !b || null != L,
            "subscriptionPlan cannot be null if shouldShowUpdatedPaymentModal is true",
          ),
          i || (null != e && !s) || P)
            ? (0, l.jsxs)("div", {
                className: c,
                children: [
                  P &&
                    (0, l.jsx)(h.FormTitle, {
                      className: A.formTitle,
                      children: f.intl.string(f.t.Ogvn5u),
                    }),
                  null != e && (i || !s)
                    ? (0, l.jsx)(h.Checkbox, {
                        type: h.Checkbox.Types.INVERTED,
                        value: C,
                        onChange: this.handleToggleEULAAcceptance,
                        disabled: r,
                        className: A.checkbox,
                        children: (0, l.jsx)("div", {
                          className: A.checkboxLabel,
                          children: f.intl.format(f.t.IodJKS, {
                            applicationName: t,
                            onClick: (t) => {
                              (0, h.openModalLazy)(async () => {
                                let { default: t } = await n
                                  .e("51868")
                                  .then(n.bind(n, 796504));
                                return (n) =>
                                  (0, l.jsx)(t, { eulaId: e, ...n });
                              }),
                                t.preventDefault();
                            },
                          }),
                        }),
                      })
                    : null,
                  null == g
                    ? null
                    : (0, l.jsx)("div", {
                        className: a()(A.finePrint, N),
                        children: g,
                      }),
                  P
                    ? (0, l.jsxs)("div", {
                        className: c,
                        children: [
                          (0, l.jsx)(h.Checkbox, {
                            type: h.Checkbox.Types.INVERTED,
                            value: E,
                            onChange:
                              this.handleToggleEUWithdralWaiverAcceptance,
                            disabled: r,
                            className: a()(A.checkbox, d),
                            children: (0, l.jsx)("div", {
                              className: a()(A.checkboxLabel, I),
                              children: f.intl.string(f.t.DFCVNz),
                            }),
                          }),
                          (0, l.jsx)("div", {
                            className: A.finePrint,
                            children: f.intl.string(f.t.jhu6zs),
                          }),
                        ],
                      })
                    : null,
                  T &&
                    (0, l.jsxs)("div", {
                      className: A.finePrint,
                      children: [
                        "*",
                        f.intl.format(f.t["5zmY3N"], {
                          documentationLink: u.Z.getArticleURL(
                            m.BhN.LOCALIZED_PRICING,
                          ),
                        }),
                      ],
                    }),
                  b &&
                    null != L &&
                    (0, l.jsx)(h.Text, {
                      variant: "text-xs/medium",
                      color: "interactive-normal",
                      children: f.intl.format(f.t["Hvo/Z2"], {
                        buttonText: (0, p.W_)(null, L),
                        interval: p.ZP.formatInterval(
                          null == L ? void 0 : L.interval,
                        ),
                        cancelSubscriptionArticle: u.Z.getArticleURL(
                          m.BhN.PREMIUM_DETAILS_CANCEL_SUB,
                        ),
                        paidServiceTermsArticle: u.Z.getArticleURL(
                          m.BhN.PAID_TERMS,
                        ),
                      }),
                    }),
                  v &&
                    null != L &&
                    (0, l.jsx)(h.Text, {
                      variant: "text-xs/medium",
                      color: "interactive-normal",
                      children: f.intl.format(f.t.Oo2FeX, {
                        buttonText: (0, p.W_)(null, L),
                        interval: p.ZP.formatInterval(
                          null == L ? void 0 : L.interval,
                        ),
                        cancelSubscriptionArticle: u.Z.getArticleURL(
                          m.BhN.PREMIUM_DETAILS_CANCEL_SUB,
                        ),
                        paidServiceTermsArticle: u.Z.getArticleURL(
                          m.BhN.PAID_TERMS,
                        ),
                      }),
                    }),
                  x &&
                    null != L &&
                    (0, l.jsx)(h.Text, {
                      variant: "text-xs/medium",
                      color: "interactive-normal",
                      children: f.intl.format(f.t["Z2c+aW"], {
                        buttonText: (0, p.W_)(null, L),
                        interval: p.ZP.formatInterval(
                          null == L ? void 0 : L.interval,
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
        constructor(...e) {
          super(...e),
            I(this, "state", {
              hasAcceptedEULA:
                !this.props.forceShow && this.props.hasPreviouslyAcceptedEULA,
              hasAcceptedWithdrawalWaiver: !1,
            }),
            I(this, "handleToggleEUWithdralWaiverAcceptance", (e, t) => {
              this.setState({ hasAcceptedWithdrawalWaiver: t });
            }),
            I(this, "handleToggleEULAAcceptance", (e, t) => {
              this.setState({ hasAcceptedEULA: t });
            });
        }
      }
      t.Z = c.ZP.connectStores([d.Z], (e) => {
        let { eulaId: t } = e;
        return {
          hasPreviouslyAcceptedEULA: null != t && d.Z.hasAcceptedEULA(t),
        };
      })(g);
    },
    472064: function (e, t, n) {
      n.r(t), n(47120), n(411104);
      var l = n(200651),
        s = n(192379),
        i = n(442837),
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
        P = n(424218),
        b = n(94692),
        v = n(981631),
        x = n(388032),
        L = n(51809);
      function N(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      class C extends s.Component {
        fetchInstallSize() {
          let {
            applicationId: e,
            branchId: t,
            buildId: n,
            manifestIds: l,
            buildSizeKB: s,
          } = this.props;
          null != n &&
            null != l &&
            null == s &&
            r.Z.wait(() => {
              (0, c.q)(e, t, n, l);
            });
        }
        componentDidMount() {
          let {
            applicationId: e,
            branchId: t,
            buildId: n,
            manifestIds: l,
          } = this.props;
          null == n || null == l ? (0, o.l)(e, t) : this.fetchInstallSize();
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
            { hasError: t, hasAcceptedNeccessaryTerms: n } = this.state;
          return (0, l.jsx)(a.Button, {
            disabled: t || null == e || !n,
            color: a.Button.Colors.GREEN,
            onClick: this.handleInstall,
            children: x.intl.string(x.t.nL0WvL),
          });
        }
        render() {
          let {
              application: e,
              buildSizeKB: t,
              transitionState: n,
            } = this.props,
            { selectedInstallationPath: s, isInstalling: i } = this.state,
            r = null != e && e.getSplashURL(440);
          return (0, l.jsxs)(a.ModalRoot, {
            transitionState: n,
            size: a.ModalSize.SMALL,
            "aria-label": x.intl.string(x.t.PphjtL),
            children: [
              null != r
                ? (0, l.jsx)("div", {
                    className: L.splash,
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
                      children: x.intl.string(x.t.PphjtL),
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
                        game: e,
                        size: f.Z.Sizes.MEDIUM,
                        className: L.gameIcon,
                      }),
                      (0, l.jsx)("div", {
                        className: L.gameName,
                        children: null != e && e.name,
                      }),
                      null != t
                        ? (0, l.jsx)("div", {
                            className: L.installSize,
                            children: (0, P.BU)(t, { useKibibytes: !0 }),
                          })
                        : null,
                    ],
                  }),
                  (0, l.jsx)("div", { className: L.divider }),
                  (0, l.jsx)(b.Z, {
                    autoFocus: !0,
                    className: L.selector,
                    value: s,
                    requiredDiskKB: t,
                    onChange: this.handleChangePath,
                  }),
                  (0, l.jsx)(u.Z, {
                    eulaId: e.eulaId,
                    applicationName: e.name,
                    disabled: i,
                    onChange: this.handlePurchaseTermsChange,
                    className: L.terms,
                  }),
                ],
              }),
              (0, l.jsx)(a.ModalFooter, { children: this.renderButton() }),
            ],
          });
        }
        constructor(...e) {
          super(...e),
            N(this, "state", {
              selectedInstallationPath: this.props.defaultInstallationPath,
              hasError: !1,
              isInstalling: !1,
              hasAcceptedNeccessaryTerms: !1,
            }),
            N(this, "isUnmounted", !1),
            N(this, "handleChangePath", (e, t) => {
              this.setState({ selectedInstallationPath: e, hasError: t });
            }),
            N(this, "install", (e, t) => {
              let {
                application: n,
                branchId: l,
                analyticsLocation: s,
              } = this.props;
              if (null == n) return null;
              (0, d.LO)({
                application: n,
                branchId: l,
                buildId: e,
                manifestIds: t,
                installationPath: this.state.selectedInstallationPath,
                analyticsLocation: s,
              }),
                (0, A.uL)(v.Z5c.APPLICATION_LIBRARY),
                this.close();
            }),
            N(this, "handleInstall", () => {
              let {
                application: e,
                buildId: t,
                manifestIds: n,
                hasPreviouslyAcceptedStoreTerms: l,
              } = this.props;
              if (null != t && null != n)
                !l && (0, h.B)(),
                  null != e && null != e.eulaId && (0, h.D)(e.eulaId),
                  this.install(t, n);
              else
                throw Error(
                  "Unexpected missing build info for non-premium product",
                );
            }),
            N(this, "handlePurchaseTermsChange", (e) => {
              this.setState({ hasAcceptedNeccessaryTerms: e });
            }),
            N(this, "close", () => {
              this.props.onClose();
            });
        }
      }
      t.default = i.ZP.connectStores([I.Z, T.Z, g.Z, p.Z], (e) => {
        let { applicationId: t, branchId: n } = e,
          l = I.Z.getTargetBuildId(t, n);
        return {
          application: p.Z.getApplication(t),
          defaultInstallationPath: T.Z.defaultInstallationPath,
          buildId: l,
          manifestIds: I.Z.getTargetManifests(t, n),
          buildSizeKB: null != l ? I.Z.getBuildSize(l) : null,
          hasPreviouslyAcceptedStoreTerms: g.Z.hasAcceptedStoreTerms,
        };
      })(C);
    },
    94692: function (e, t, n) {
      n(653041), n(47120);
      var l = n(200651),
        s = n(192379),
        i = n(442837),
        a = n(481060),
        r = n(325432),
        o = n(391690),
        c = n(424218),
        h = n(998502),
        d = n(388032),
        u = n(502293);
      function p(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      let m = "select";
      class f extends s.PureComponent {
        fetchAllDirectoryMetadata() {
          let { installationPaths: e } = this.props,
            t = e.map((e) => {
              let { path: t } = e;
              return t;
            }),
            { newInstallationPath: n } = this.state;
          for (let e of (null != n && t.push(n),
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
            n = e.map((e) => {
              let { path: t, label: n } = e;
              return { value: t, label: this.renderLabel(t, n) };
            });
          return (
            null != t && n.push({ value: t, label: this.renderLabel(t) }),
            n.push({ value: m, label: d.intl.string(d.t["cL/rrq"]) }),
            n
          );
        }
        hasEnoughDiskSpace(e) {
          let { requiredDiskKB: t, installationPathsMetadata: n } = this.props,
            l = null != n[e] ? n[e].availableKB : null;
          return null == t || null == l || t < l;
        }
        sendChange(e) {
          let { installationPathsMetadata: t, onChange: n } = this.props,
            l = null != t[e] && !1 === t[e].hasPermission;
          n(e, l || !this.hasEnoughDiskSpace(e));
        }
        renderError() {
          let { value: e, installationPathsMetadata: t } = this.props;
          return null != t[e] && !1 === t[e].hasPermission
            ? (0, l.jsx)("div", {
                className: u.error,
                children: d.intl.string(d.t.cEUT8P),
              })
            : this.hasEnoughDiskSpace(e)
              ? null
              : (0, l.jsx)("div", {
                  className: u.error,
                  children: d.intl.string(d.t.duXbEx),
                });
        }
        renderLabel(e, t) {
          let { installationPathsMetadata: n } = this.props,
            l = null != t ? t : e;
          return null != n[e] && null != n[e].availableKB
            ? d.intl.formatToPlainString(d.t["Y+M3rq"], {
                path: l,
                size: (0, c.BU)(n[e].availableKB, { useKibibytes: !0 }),
              })
            : l;
        }
        render() {
          let { value: e, className: t, autoFocus: n } = this.props;
          return (0, l.jsxs)("div", {
            className: t,
            children: [
              (0, l.jsx)(a.FormTitle, {
                tag: "h5",
                children: d.intl.string(d.t.WTJuNj),
              }),
              (0, l.jsx)(a.SingleSelect, {
                autoFocus: n,
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
              e === m
                ? h.ZP.showOpenDialog(["openDirectory"]).then((e) => {
                    if (null != e && e.length > 0) {
                      let t = e[0];
                      this.setState({
                        newInstallationPath:
                          null !=
                          this.props.installationPaths.find((e) => {
                            let { path: n } = e;
                            return n === t;
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
      t.Z = i.ZP.connectStores([o.Z], () => ({
        installationPaths: o.Z.installationPaths,
        installationPathsMetadata: o.Z.installationPathsMetadata,
      }))(f);
    },
    175782: function (e, t, n) {
      e.exports = {
        formTitle: "formTitle_e5aa30",
        checkbox: "checkbox_e5aa30",
        checkboxLabel: "checkboxLabel_e5aa30",
        finePrint: "finePrint_e5aa30",
      };
    },
    51809: function (e, t, n) {
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
    502293: function (e, t, n) {
      e.exports = { error: "error_da3dfb" };
    },
  },
]);
//# sourceMappingURL=3032e22ce942473aaa11.js.map
