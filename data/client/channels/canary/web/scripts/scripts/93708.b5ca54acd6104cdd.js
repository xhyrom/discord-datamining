"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["93708"],
  {
    151271(e, t, i) {
      i.d(t, {
        RQ: () => S,
        Ri: () => h,
        U: () => p,
        bf: () => V,
        ed: () => d,
        r$: () => o,
        v8: () => u,
      });
      var a = i(296489),
        l = i.n(a),
        c = i(499867),
        n = i(265690),
        v = i(121894),
        s = i(698279);
      let r = Object.freeze({
          activeView: null,
          lastActiveView: null,
          activeViewType: null,
          activeChannelId: null,
          searchQuery: "",
          isSearchSuggestion: !1,
          pickerId: (function () {
            let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "uid_";
            return l()(e);
          })(),
          isNitroLockedSectionVisible: !1,
          areOnlyNitroLockedSectionsVisible: !1,
        }),
        w = (0, n.h)()(
          (0, c.Zr)((e, t) => r, {
            name: "expression-picker-last-active-view",
            partialize: (e) => ({ lastActiveView: e.lastActiveView }),
          }),
        ),
        V = (e, t, i) => {
          (0, v.r)(() =>
            w.setState({
              activeView: e,
              activeViewType: t,
              activeChannelId: i,
              lastActiveView: w.getState().activeView,
            }),
          );
        },
        u = (e, t) => {
          let i = w.getState();
          (void 0 !== e && e !== i.activeViewType) ||
            (void 0 !== t && t !== i.activeChannelId) ||
            (null !== i.activeView &&
              (0, v.r)(() =>
                w.setState({
                  activeView: null,
                  activeViewType: null,
                  activeChannelId: null,
                  lastActiveView: i.activeView,
                }),
              ));
        },
        d = (e, t) => {
          let i = w.getState();
          null == i.activeView ? V(i.lastActiveView ?? s.kx.EMOJI, e, t) : u();
        },
        o = (e, t, i) => {
          w.getState().activeView === e ? u() : V(e, t, i);
        },
        p = (e) => {
          (0, v.r)(() =>
            w.setState({
              activeView: e,
              lastActiveView: w.getState().activeView,
            }),
          );
        },
        h = function (e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          (0, v.r)(() => w.setState({ searchQuery: e, isSearchSuggestion: t }));
        },
        S = w;
    },
  },
]);
//# sourceMappingURL=93708.b5ca54acd6104cdd.js.map
