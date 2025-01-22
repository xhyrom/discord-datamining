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
      var s = n(544891),
        l = n(570140),
        i = n(173747),
        a = n(981631);
      async function r(t, e, n, r) {
        if (!!i.Z.needsToFetchBuildSize(n)) {
          l.Z.dispatch({
            type: "APPLICATION_BUILD_SIZE_FETCH_START",
            buildId: n,
          });
          try {
            let i = await s.tn.post({
              url: a.ANM.APPLICATION_BUILD_SIZE(t, e, n),
              body: { manifest_ids: r },
              oldFormErrors: !0,
              rejectWithError: !0,
            });
            l.Z.dispatch({
              type: "APPLICATION_BUILD_SIZE_FETCH_SUCCESS",
              buildId: n,
              sizeKB: i.body.size_kb,
            });
          } catch (t) {
            l.Z.dispatch({
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
          return l;
        },
        D: function () {
          return i;
        },
      });
      var s = n(570140);
      function l() {
        s.Z.dispatch({ type: "APPLICATION_STORE_ACCEPT_STORE_TERMS" });
      }
      function i(t) {
        s.Z.dispatch({ type: "APPLICATION_STORE_ACCEPT_EULA", eulaId: t });
      }
    },
    325432: function (t, e, n) {
      n.d(e, {
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
      var s = n(570140),
        l = n(830168);
      function i(t) {
        l.Z.queryDirectory(t, (e, n) => {
          if (null == e && null != n)
            s.Z.dispatch({
              type: "INSTALLATION_LOCATION_ADD",
              path: t,
              metadata: n,
            });
        });
      }
      function a(t) {
        s.Z.dispatch({ type: "INSTALLATION_LOCATION_REMOVE", path: t });
      }
      function r(t, e) {
        let { label: n, isDefault: l } = e;
        s.Z.dispatch({
          type: "INSTALLATION_LOCATION_UPDATE",
          path: t,
          label: n,
          isDefault: l,
        });
      }
      function o(t) {
        let e = {},
          n = 0;
        for (let i of t) {
          if (null != i && "string" == typeof i)
            l.Z.queryDirectory(i, (l, a) => {
              ++n,
                null == l && null != a && (e[i] = a),
                n === t.length &&
                  s.Z.dispatch({
                    type: "INSTALLATION_LOCATION_FETCH_METADATA",
                    metadataPayload: e,
                  });
            });
        }
      }
    },
    472064: function (t, e, n) {
      n.r(e), n(47120), n(411104);
      var s = n(200651),
        l = n(192379),
        i = n(442837),
        a = n(481060),
        r = n(570140),
        o = n(57513),
        h = n(689241),
        u = n(447273),
        d = n(51025),
        c = n(672971),
        p = n(812206),
        f = n(600164),
        I = n(925329),
        m = n(703656),
        g = n(173747),
        P = n(850840),
        T = n(391690),
        A = n(424218),
        C = n(94692),
        S = n(981631),
        Z = n(388032),
        _ = n(51809);
      function b(t, e, n) {
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
      class L extends l.Component {
        fetchInstallSize() {
          let {
            applicationId: t,
            branchId: e,
            buildId: n,
            manifestIds: s,
            buildSizeKB: l,
          } = this.props;
          null != n &&
            null != s &&
            null == l &&
            r.Z.wait(() => {
              (0, h.q)(t, e, n, s);
            });
        }
        componentDidMount() {
          let {
            applicationId: t,
            branchId: e,
            buildId: n,
            manifestIds: s,
          } = this.props;
          null == n || null == s ? (0, o.l)(t, e) : this.fetchInstallSize();
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
          return (0, s.jsx)(a.Button, {
            disabled: e || null == t || !n,
            color: a.Button.Colors.GREEN,
            onClick: this.handleInstall,
            children: Z.intl.string(Z.t.nL0WvL),
          });
        }
        render() {
          let {
              application: t,
              buildSizeKB: e,
              transitionState: n,
            } = this.props,
            { selectedInstallationPath: l, isInstalling: i } = this.state,
            r = null != t && t.getSplashURL(440);
          return (0, s.jsxs)(a.ModalRoot, {
            transitionState: n,
            size: a.ModalSize.SMALL,
            "aria-label": Z.intl.string(Z.t.PphjtL),
            children: [
              null != r
                ? (0, s.jsx)("div", {
                    className: _.splash,
                    style: { backgroundImage: "url(".concat(r, ")") },
                  })
                : null,
              (0, s.jsxs)(a.ModalHeader, {
                justify: f.Z.Justify.BETWEEN,
                children: [
                  (0, s.jsx)(f.Z.Child, {
                    grow: 1,
                    children: (0, s.jsx)(a.Heading, {
                      variant: "heading-lg/semibold",
                      children: Z.intl.string(Z.t.PphjtL),
                    }),
                  }),
                  (0, s.jsx)(f.Z.Child, {
                    grow: 0,
                    children: (0, s.jsx)(a.ModalCloseButton, {
                      onClick: this.close,
                    }),
                  }),
                ],
              }),
              (0, s.jsxs)(a.ModalContent, {
                children: [
                  (0, s.jsxs)(f.Z, {
                    align: f.Z.Align.CENTER,
                    children: [
                      (0, s.jsx)(I.Z, {
                        game: t,
                        size: I.Z.Sizes.MEDIUM,
                        className: _.gameIcon,
                      }),
                      (0, s.jsx)("div", {
                        className: _.gameName,
                        children: null != t && t.name,
                      }),
                      null != e
                        ? (0, s.jsx)("div", {
                            className: _.installSize,
                            children: (0, A.BU)(e, { useKibibytes: !0 }),
                          })
                        : null,
                    ],
                  }),
                  (0, s.jsx)("div", { className: _.divider }),
                  (0, s.jsx)(C.Z, {
                    autoFocus: !0,
                    className: _.selector,
                    value: l,
                    requiredDiskKB: e,
                    onChange: this.handleChangePath,
                  }),
                  (0, s.jsx)(c.Z, {
                    eulaId: t.eulaId,
                    applicationName: t.name,
                    disabled: i,
                    onChange: this.handlePurchaseTermsChange,
                    className: _.terms,
                  }),
                ],
              }),
              (0, s.jsx)(a.ModalFooter, { children: this.renderButton() }),
            ],
          });
        }
        constructor(...t) {
          super(...t),
            b(this, "state", {
              selectedInstallationPath: this.props.defaultInstallationPath,
              hasError: !1,
              isInstalling: !1,
              hasAcceptedNeccessaryTerms: !1,
            }),
            b(this, "isUnmounted", !1),
            b(this, "handleChangePath", (t, e) => {
              this.setState({ selectedInstallationPath: t, hasError: e });
            }),
            b(this, "install", (t, e) => {
              let {
                application: n,
                branchId: s,
                analyticsLocation: l,
              } = this.props;
              if (null == n) return null;
              (0, d.LO)({
                application: n,
                branchId: s,
                buildId: t,
                manifestIds: e,
                installationPath: this.state.selectedInstallationPath,
                analyticsLocation: l,
              }),
                (0, m.uL)(S.Z5c.APPLICATION_LIBRARY),
                this.close();
            }),
            b(this, "handleInstall", () => {
              let {
                application: t,
                buildId: e,
                manifestIds: n,
                hasPreviouslyAcceptedStoreTerms: s,
              } = this.props;
              if (null != e && null != n)
                !s && (0, u.B)(),
                  null != t && null != t.eulaId && (0, u.D)(t.eulaId),
                  this.install(e, n);
              else
                throw Error(
                  "Unexpected missing build info for non-premium product",
                );
            }),
            b(this, "handlePurchaseTermsChange", (t) => {
              this.setState({ hasAcceptedNeccessaryTerms: t });
            }),
            b(this, "close", () => {
              this.props.onClose();
            });
        }
      }
      e.default = i.ZP.connectStores([g.Z, T.Z, P.Z, p.Z], (t) => {
        let { applicationId: e, branchId: n } = t,
          s = g.Z.getTargetBuildId(e, n);
        return {
          application: p.Z.getApplication(e),
          defaultInstallationPath: T.Z.defaultInstallationPath,
          buildId: s,
          manifestIds: g.Z.getTargetManifests(e, n),
          buildSizeKB: null != s ? g.Z.getBuildSize(s) : null,
          hasPreviouslyAcceptedStoreTerms: P.Z.hasAcceptedStoreTerms,
        };
      })(L);
    },
    94692: function (t, e, n) {
      n(653041), n(47120);
      var s = n(200651),
        l = n(192379),
        i = n(442837),
        a = n(481060),
        r = n(325432),
        o = n(391690),
        h = n(424218),
        u = n(998502),
        d = n(388032),
        c = n(502293);
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
      let f = "select";
      class I extends l.PureComponent {
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
            n.push({ value: f, label: d.intl.string(d.t["cL/rrq"]) }),
            n
          );
        }
        hasEnoughDiskSpace(t) {
          let { requiredDiskKB: e, installationPathsMetadata: n } = this.props,
            s = null != n[t] ? n[t].availableKB : null;
          return null == e || null == s || e < s;
        }
        sendChange(t) {
          let { installationPathsMetadata: e, onChange: n } = this.props,
            s = null != e[t] && !1 === e[t].hasPermission;
          n(t, s || !this.hasEnoughDiskSpace(t));
        }
        renderError() {
          let { value: t, installationPathsMetadata: e } = this.props;
          return null != e[t] && !1 === e[t].hasPermission
            ? (0, s.jsx)("div", {
                className: c.error,
                children: d.intl.string(d.t.cEUT8P),
              })
            : this.hasEnoughDiskSpace(t)
              ? null
              : (0, s.jsx)("div", {
                  className: c.error,
                  children: d.intl.string(d.t.duXbEx),
                });
        }
        renderLabel(t, e) {
          let { installationPathsMetadata: n } = this.props,
            s = null != e ? e : t;
          return null != n[t] && null != n[t].availableKB
            ? d.intl.formatToPlainString(d.t["Y+M3rq"], {
                path: s,
                size: (0, h.BU)(n[t].availableKB, { useKibibytes: !0 }),
              })
            : s;
        }
        render() {
          let { value: t, className: e, autoFocus: n } = this.props;
          return (0, s.jsxs)("div", {
            className: e,
            children: [
              (0, s.jsx)(a.FormTitle, {
                tag: "h5",
                children: d.intl.string(d.t.WTJuNj),
              }),
              (0, s.jsx)(a.SingleSelect, {
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
              t === f
                ? u.ZP.showOpenDialog(["openDirectory"]).then((t) => {
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
      e.Z = i.ZP.connectStores([o.Z], () => ({
        installationPaths: o.Z.installationPaths,
        installationPathsMetadata: o.Z.installationPathsMetadata,
      }))(I);
    },
    51809: function (t, e, n) {
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
    502293: function (t, e, n) {
      t.exports = { error: "error_da3dfb" };
    },
  },
]);
//# sourceMappingURL=b6c1c997a0d5ebae7953.js.map
