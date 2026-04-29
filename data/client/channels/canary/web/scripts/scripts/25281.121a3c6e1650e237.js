"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["25281"],
  {
    22212(e, t, s) {
      s.d(t, {
        Cf: () => r,
        Jo: () => u,
        WD: () => o,
        X9: () => c,
        lP: () => h,
        xF: () => l,
      });
      var i = s(954571),
        n = s(652215);
      function a(e) {
        let { targetUserId: t, tab: s, actionType: a } = e;
        i.default.track(n.HAw.FRIENDS_LIST_ITEM_ACTION, {
          target_user_id: t,
          tab: s,
          action_type: a,
        });
      }
      function l(e) {
        let { targetUserId: t, tab: s } = e;
        a({ targetUserId: t, tab: s, actionType: "row_clicked" });
      }
      function o(e) {
        let { targetUserId: t, tab: s } = e;
        a({ targetUserId: t, tab: s, actionType: "message_clicked" });
      }
      function r(e) {
        let { targetUserId: t, tab: s } = e;
        a({ targetUserId: t, tab: s, actionType: "video_call_clicked" });
      }
      function c(e) {
        let { targetUserId: t, tab: s } = e;
        a({ targetUserId: t, tab: s, actionType: "voice_call_clicked" });
      }
      function h(e) {
        let { targetUserId: t, tab: s } = e;
        a({ targetUserId: t, tab: s, actionType: "remove_friend_clicked" });
      }
      function u(e) {
        let { targetUserId: t, tab: s } = e;
        a({ targetUserId: t, tab: s, actionType: "context_menu_interacted" });
      }
    },
    513297(e, t, s) {
      s.d(t, { A: () => d });
      var i,
        n = s(627968);
      s(64700);
      var a = s(503698),
        l = s.n(a),
        o = s(990078),
        r = s(939249),
        c = s(909800),
        h =
          (((i = h || {})[(i.ACCEPT = 0)] = "ACCEPT"),
          (i[(i.DENY = 1)] = "DENY"),
          (i[(i.DEFAULT = 2)] = "DEFAULT"),
          i);
      function u(e) {
        let {
          icon: t,
          tooltip: s,
          onClick: i,
          actionType: a = 2,
          shouldHighlight: h,
          loading: u = !1,
        } = e;
        return (0, n.jsx)(o.m, {
          text: s,
          children: (0, n.jsx)(r.D, {
            tag: "div",
            "aria-label": s,
            onClick: u ? void 0 : i,
            className: l()(c.hP, {
              [c.Jj]: 0 === a,
              [c.Bs]: 1 === a,
              [c.Zt]: h,
              [c.r9]: u,
            }),
            children: (0, n.jsx)(t, { className: c.Kk, color: "currentColor" }),
          }),
        });
      }
      u.ActionTypes = h;
      let d = u;
    },
    414711(e, t, s) {
      s.d(t, { A: () => m });
      var i = s(627968),
        n = s(64700),
        a = s(503698),
        l = s.n(a),
        o = s(615300),
        r = s(837381),
        c = s(187322),
        h = s(442433),
        u = s(688810),
        d = s(595623),
        p = s(22212);
      s(646363);
      var v = s(828066);
      class A extends n.PureComponent {
        state = {
          height: new o.A.Value(this.props.height ?? 61),
          opacity: new o.A.Value(1),
          hovered: !1,
          isContextMenuActive: !1,
        };
        componentWillLeave(e) {
          o.A.parallel([
            o.A.timing(this.state.opacity, { toValue: 0, duration: 200 }),
            o.A.timing(this.state.height, { toValue: 0, duration: 200 }),
          ]).start(e);
        }
        componentWillEnter(e) {
          this.state.opacity.setValue(0),
            this.state.height.setValue(0),
            o.A.parallel([
              o.A.timing(this.state.opacity, { toValue: 1, duration: 200 }),
              o.A.timing(this.state.height, {
                toValue: this.props.height ?? 61,
                duration: 200,
              }),
            ]).start(e);
        }
        handleMouseEnter = () => {
          let { isFocused: e, isActive: t, onOtherHover: s } = this.props,
            { isContextMenuActive: i } = this.state;
          this.setState({ hovered: e }), !e || t || i || s?.();
        };
        handleMouseLeave = () => {
          this.setState({ hovered: !1 });
        };
        handleContextMenu = (e, t) => {
          let { analyticsLocations: n } = this.props;
          this.setState({ isContextMenuActive: !0 }),
            (0, h.L3)(
              e,
              async () => {
                let { default: e } = await Promise.all([
                    s.e("98944"),
                    s.e("17546"),
                    s.e("26132"),
                    s.e("46652"),
                    s.e("93190"),
                    s.e("34552"),
                    s.e("8757"),
                    s.e("89673"),
                    s.e("68403"),
                    s.e("85968"),
                    s.e("60195"),
                    s.e("29787"),
                    s.e("97558"),
                    s.e("94000"),
                    s.e("91994"),
                    s.e("76665"),
                    s.e("76273"),
                    s.e("24198"),
                    s.e("86169"),
                    s.e("32418"),
                  ]).then(s.bind(s, 668569)),
                  a = () => {
                    (0, p.Jo)({
                      targetUserId: t.id,
                      tab: d.Ay.getState().section,
                    });
                  };
                return (s) => {
                  let l = (0, i.jsx)(e, { ...s, user: t, onInteraction: a });
                  return null == n
                    ? l
                    : (0, i.jsx)(u.f5, { value: n, children: l });
                };
              },
              {
                onClose: () => {
                  this.setState({ isContextMenuActive: !1 });
                },
              },
            );
        };
        render() {
          let {
              height: e,
              opacity: t,
              hovered: s,
              isContextMenuActive: n,
            } = this.state,
            {
              children: a,
              user: h,
              onClick: u,
              isActive: d,
              className: p,
              activeClassName: A,
              noBorder: m,
            } = this.props;
          return (0, i.jsxs)(i.Fragment, {
            children: [
              m
                ? null
                : (0, i.jsx)("div", {
                    className: l()(v.yF, { [v._]: d || n || s }),
                  }),
              (0, i.jsx)(r.tG, {
                id: h.id,
                children: (r) =>
                  (0, i.jsx)(c.vN, {
                    offset: { left: -8, right: -8 },
                    children: (0, i.jsx)(o.A.div, {
                      className: l()(
                        p,
                        v.Vg,
                        null != A ? { [A]: d || n } : null,
                        { [v.vu]: d || n },
                      ),
                      onContextMenu: (e) => this.handleContextMenu(e, h),
                      onMouseEnter: this.handleMouseEnter,
                      onMouseLeave: this.handleMouseLeave,
                      onClick: u ?? void 0,
                      style: { height: e, opacity: t },
                      ...r,
                      children: a(s || d || n),
                    }),
                  }),
              }),
            ],
          });
        }
      }
      let m = A;
    },
    723690(e, t, s) {
      s.d(t, { A: () => u });
      var i = s(627968);
      s(64700);
      var n = s(503698),
        a = s.n(n),
        l = s(17928),
        o = s(297413),
        r = s(966327),
        c = s(994500);
      s(427262);
      var h = s(463361);
      let u = function (e) {
        let {
            user: t,
            hovered: s,
            subText: n,
            showAccountIdentifier: u,
            status: d,
            isMobile: p,
            isVR: v,
            className: A,
          } = e,
          m = (0, l.bG)([c.A], () => c.A.getNickname(t.id));
        return (0, i.jsxs)("div", {
          className: a()(h.eF, A, { [h.yo]: s }),
          children: [
            (0, i.jsx)(r.A, {
              user: t,
              className: h.my,
              animate: s,
              status: d,
              isMobile: p,
              isVR: v,
            }),
            (0, i.jsxs)("div", {
              className: h.Qq,
              children: [
                (0, i.jsx)(o.A, {
                  user: t,
                  nick: m,
                  botClass: h.AO,
                  className: a()(h.xK, { [h.Nu]: t.hasUniqueUsername() }),
                  usernameClass: h.Xh,
                  discriminatorClass: h.D2,
                  showAccountIdentifier: u,
                }),
                (0, i.jsx)("div", { className: h.W$, children: n }),
              ],
            }),
          ],
        });
      };
    },
  },
]);
//# sourceMappingURL=25281.121a3c6e1650e237.js.map
