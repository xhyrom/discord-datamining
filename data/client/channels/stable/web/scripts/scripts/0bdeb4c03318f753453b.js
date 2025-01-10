"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["59334"],
  {
    276022: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return v;
        },
      }),
        t(653041);
      var i = t(200651),
        o = t(192379),
        a = t(442837),
        c = t(481060),
        l = t(139387),
        r = t(230711),
        u = t(213459),
        s = t(434404),
        d = t(795594),
        p = t(430824),
        f = t(496675),
        _ = t(981631),
        b = t(388032);
      function v(e) {
        var n;
        let {
            user: v,
            application: m,
            guildId: I,
            context: g,
            onItemClick: C,
          } = e,
          x =
            null !== (n = null == m ? void 0 : m.id) && void 0 !== n
              ? n
              : null == v
                ? void 0
                : v.id,
          T = p.Z.getGuild(I),
          h = (0, a.e7)([f.Z], () =>
            null != T ? f.Z.can(_.Plq.MANAGE_GUILD, T) : null,
          ),
          A = (0, u.LD)(I, !0),
          P = (0, u.PL)(!0, !0),
          { isUserApp: Z, isGuildApp: O } = o.useMemo(() => {
            var e, n, t, i;
            if (null == x) return { isGuildApp: !1, isUserApp: !1 };
            let o = Object.values(
                null !==
                  (t =
                    null === (e = A.result) || void 0 === e
                      ? void 0
                      : e.sections) && void 0 !== t
                  ? t
                  : {},
              ),
              a = Object.values(
                null !==
                  (i =
                    null === (n = P.result) || void 0 === n
                      ? void 0
                      : n.sections) && void 0 !== i
                  ? i
                  : {},
              );
            return {
              isGuildApp: o.some((e) => {
                var n;
                return (
                  (null === (n = e.descriptor.application) || void 0 === n
                    ? void 0
                    : n.id) === x
                );
              }),
              isUserApp: a.some((e) => {
                var n;
                return (
                  (null === (n = e.descriptor.application) || void 0 === n
                    ? void 0
                    : n.id) === x
                );
              }),
            };
          }, [A, P, x]);
        o.useEffect(() => {
          t(360606);
        }, []);
        let k = o.useCallback(() => {
            if ((null == T ? void 0 : T.id) != null)
              s.Z.open(T.id, _.pNK.INTEGRATIONS),
                l.Z.setSection(_.b4C.APPLICATION, x),
                null == C || C();
          }, [x, null == T ? void 0 : T.id, C]),
          y = o.useCallback(() => {
            r.Z.open(_.oAB.AUTHORIZED_APPS);
            let e = "";
            null != m ? (e = m.name) : null != v && (e = v.username),
              "" !== e && d.J.setState({ searchQuery: e }),
              null == C || C();
          }, [m, C, v]);
        if (g === _.IlC.POPOUT) return null;
        let G = [];
        return (
          O &&
            h &&
            G.push(
              (0, i.jsx)(
                c.MenuItem,
                {
                  id: "manage-server-integration",
                  label: b.intl.string(b.t.IuSJT0),
                  action: k,
                },
                "manage-server-integration",
              ),
            ),
          Z &&
            G.push(
              (0, i.jsx)(
                c.MenuItem,
                {
                  id: "manage-authorized-app",
                  label: b.intl.string(b.t.V8ruv7),
                  action: y,
                },
                "manage-authorized-app",
              ),
            ),
          G
        );
      }
    },
    463096: function (e, n, t) {
      e.exports = {
        spacing: "spacing_ddcc45",
        spacingTop: "spacingTop_ddcc45",
        message: "message_ddcc45",
      };
    },
    986371: function (e, n, t) {
      e.exports = {
        actionContainer: "actionContainer_cec7a5",
        actionIconContainer: "actionIconContainer_cec7a5",
        actionIcon: "actionIcon_cec7a5",
        actionTextContainer: "actionTextContainer_cec7a5",
        actionTextHeader: "actionTextHeader_cec7a5",
        actionTextHelper: "actionTextHelper_cec7a5",
      };
    },
    953568: function (e, n, t) {
      e.exports = {
        wrapper: "wrapper_a24e84",
        button: "button_a24e84",
        focused: "focused_a24e84",
        icon: "icon_a24e84",
      };
    },
    500054: function (e, n, t) {
      e.exports = { interactionInfoMenuItem: "interactionInfoMenuItem_df26f0" };
    },
    694638: function (e, n, t) {
      e.exports = {
        modal: "modal_b551cf",
        heading: "heading_b551cf",
        divider: "divider_b551cf",
        body: "body_b551cf",
        header: "header_b551cf",
        select: "select_b551cf",
        footer: "footer_b551cf",
        anomaly: "anomaly_b551cf",
        error: "error_b551cf",
        spinner: "spinner_b551cf",
        buttonCopy: "buttonCopy_b551cf",
        tooltip: "tooltip_b551cf",
      };
    },
    148562: function (e, n, t) {
      e.exports = { list: "list_fd4745" };
    },
  },
]);
//# sourceMappingURL=0bdeb4c03318f753453b.js.map
