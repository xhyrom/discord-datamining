"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["49315"],
  {
    276022: function (n, e, i) {
      i.d(e, {
        Z: function () {
          return I;
        },
      }),
        i(653041);
      var t = i(200651),
        o = i(192379),
        a = i(442837),
        c = i(481060),
        l = i(139387),
        u = i(230711),
        r = i(213459),
        s = i(434404),
        d = i(795594),
        p = i(430824),
        v = i(496675),
        f = i(981631),
        _ = i(388032);
      function I(n) {
        var e;
        let {
            user: I,
            application: g,
            guildId: m,
            context: T,
            onItemClick: x,
          } = n,
          C =
            null !== (e = null == g ? void 0 : g.id) && void 0 !== e
              ? e
              : null == I
                ? void 0
                : I.id,
          A = p.Z.getGuild(m),
          b = (0, a.e7)([v.Z], () =>
            null != A ? v.Z.can(f.Plq.MANAGE_GUILD, A) : null,
          ),
          h = (0, r.LD)(m, !0),
          P = (0, r.PL)(!0, !0),
          { isUserApp: Z, isGuildApp: O } = o.useMemo(() => {
            var n, e, i, t;
            if (null == C) return { isGuildApp: !1, isUserApp: !1 };
            let o = Object.values(
                null !==
                  (i =
                    null === (n = h.result) || void 0 === n
                      ? void 0
                      : n.sections) && void 0 !== i
                  ? i
                  : {},
              ),
              a = Object.values(
                null !==
                  (t =
                    null === (e = P.result) || void 0 === e
                      ? void 0
                      : e.sections) && void 0 !== t
                  ? t
                  : {},
              );
            return {
              isGuildApp: o.some((n) => {
                var e;
                return (
                  (null === (e = n.descriptor.application) || void 0 === e
                    ? void 0
                    : e.id) === C
                );
              }),
              isUserApp: a.some((n) => {
                var e;
                return (
                  (null === (e = n.descriptor.application) || void 0 === e
                    ? void 0
                    : e.id) === C
                );
              }),
            };
          }, [h, P, C]);
        o.useEffect(() => {
          i(360606);
        }, []);
        let k = o.useCallback(() => {
            if ((null == A ? void 0 : A.id) != null)
              s.Z.open(A.id, f.pNK.INTEGRATIONS),
                l.Z.setSection(f.b4C.APPLICATION, C),
                null == x || x();
          }, [C, null == A ? void 0 : A.id, x]),
          G = o.useCallback(() => {
            u.Z.open(f.oAB.AUTHORIZED_APPS);
            let n = "";
            null != g ? (n = g.name) : null != I && (n = I.username),
              "" !== n && d.J.setState({ searchQuery: n }),
              null == x || x();
          }, [g, x, I]);
        if (T === f.IlC.POPOUT) return null;
        let M = [];
        return (
          O &&
            b &&
            M.push(
              (0, t.jsx)(
                c.MenuItem,
                {
                  id: "manage-server-integration",
                  label: _.intl.string(_.t.IuSJT0),
                  action: k,
                },
                "manage-server-integration",
              ),
            ),
          Z &&
            M.push(
              (0, t.jsx)(
                c.MenuItem,
                {
                  id: "manage-authorized-app",
                  label: _.intl.string(_.t.V8ruv7),
                  action: G,
                },
                "manage-authorized-app",
              ),
            ),
          M
        );
      }
    },
    463096: function (n, e, i) {
      n.exports = {
        spacing: "spacing_ddcc45",
        spacingTop: "spacingTop_ddcc45",
        message: "message_ddcc45",
      };
    },
    986371: function (n, e, i) {
      n.exports = {
        actionContainer: "actionContainer_cec7a5",
        actionIconContainer: "actionIconContainer_cec7a5",
        actionIcon: "actionIcon_cec7a5",
        actionTextContainer: "actionTextContainer_cec7a5",
        actionTextHeader: "actionTextHeader_cec7a5",
        actionTextHelper: "actionTextHelper_cec7a5",
      };
    },
    953568: function (n, e, i) {
      n.exports = {
        wrapper: "wrapper_a24e84",
        button: "button_a24e84",
        focused: "focused_a24e84",
        icon: "icon_a24e84",
      };
    },
    500054: function (n, e, i) {
      n.exports = { interactionInfoMenuItem: "interactionInfoMenuItem_df26f0" };
    },
    148562: function (n, e, i) {
      n.exports = { list: "list_fd4745" };
    },
  },
]);
//# sourceMappingURL=56f221b65acd7480be91.js.map
