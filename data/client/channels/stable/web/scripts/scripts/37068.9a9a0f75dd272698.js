"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["37068"],
  {
    595623(e, t, i) {
      i.d(t, { Ay: () => b }), i(321073);
      var s = i(735438),
        n = i.n(s),
        r = i(17928),
        a = i(228366),
        u = i(49229),
        l = i(315069),
        o = i(736056),
        c = i(710195),
        N = i(586774),
        p = i(800828),
        h = i(275759),
        A = i(616356),
        m = i(696451),
        I = i(71393),
        d = i(290863),
        E = i(994500),
        y = i(287809),
        g = i(652215),
        G = i(788868);
      function f(e) {
        let t = y.default.getUser(e);
        return {
          user: t,
          usernameLower: null != t ? t.username.toLowerCase() : null,
        };
      }
      function w(e) {
        return {
          status: d.A.getStatus(e),
          isMobile: d.A.isMobileOnline(e),
          isVR: d.A.isVROnline(e),
          activities: d.A.getActivities(e),
          applicationStream: A.A.getAnyStreamForUser(e),
        };
      }
      function R(e) {
        let t = [];
        return (
          n()(m.Ay.memberOf(e))
            .map(I.A.getGuild)
            .sortBy((e) => (null != e ? e.name.toLowerCase() : null))
            .forEach((e) => {
              null != e && t.push(e);
            }),
          { mutualGuildsLength: t.length, mutualGuilds: t.slice(0, 5) }
        );
      }
      class D extends l.A {
        key;
        userId;
        type;
        status;
        isMobile;
        isVR;
        activities;
        applicationStream;
        user;
        usernameLower;
        mutualGuildsLength;
        mutualGuilds;
        nickname;
        spam;
        giftIntentType;
        ignoredUser;
        applicationId;
        isGameRelationship;
        constructor(e) {
          super(),
            (this.key = e.key),
            (this.userId = e.userId),
            (this.type = e.type),
            (this.status = e.status),
            (this.activities = e.activities),
            (this.applicationStream = e.applicationStream),
            (this.user = e.user),
            (this.isMobile = e.isMobile),
            (this.isVR = e.isVR),
            (this.usernameLower = e.usernameLower),
            (this.mutualGuildsLength = e.mutualGuildsLength),
            (this.mutualGuilds = e.mutualGuilds),
            (this.nickname = e.nickname),
            (this.spam = e.spam),
            (this.giftIntentType = e.giftIntentType),
            (this.ignoredUser = e.ignoredUser),
            (this.applicationId = e.applicationId),
            (this.isGameRelationship = e.isGameRelationship ?? !1);
        }
        get comparator() {
          return [
            this.type,
            this.nickname?.toLowerCase() ??
              this.user?.globalName?.toLowerCase() ??
              this.usernameLower,
          ];
        }
      }
      class S {
        _rows;
        constructor(e = []) {
          this._rows = e;
        }
        reset() {
          let e = new Set(),
            t = Array.from(E.A.getMutableRelationships().entries()).map((t) => {
              let [i, s] = t;
              return (
                s === g.eA$.FRIEND && e.add(i),
                new D({
                  key: i,
                  type: s,
                  userId: i,
                  nickname: E.A.getNickname(i),
                  ...f(i),
                  ...w(i),
                  ...R(i),
                  spam: E.A.isSpam(i),
                  ignoredUser: E.A.isIgnored(i),
                  giftIntentType:
                    s === g.eA$.FRIEND &&
                    h.Ay.getFriendAnniversaries().includes(i)
                      ? G.np.FRIEND_ANNIVERSARY
                      : void 0,
                  applicationId: E.A.getOriginApplicationId(i),
                })
              );
            }),
            i = [],
            s = p.A.getGameRelationships().values(),
            r = new Set();
          s.forEach((t) => {
            let { id: s, applicationId: n, type: a } = t;
            (a === g.eA$.FRIEND && e.has(s)) ||
              (a === g.eA$.FRIEND && r.has(s)) ||
              (a === g.eA$.FRIEND && r.add(s),
              i.push(
                new D({
                  key: `${s}-${n}`,
                  type: a,
                  userId: s,
                  applicationId: n,
                  nickname: E.A.getNickname(s),
                  ...f(s),
                  ...w(s),
                  ...R(s),
                  spam: E.A.isSpam(s),
                  ignoredUser: E.A.isIgnored(s),
                  isGameRelationship: !0,
                }),
              ));
          });
          let a = n().map(
            N.A.getSuggestions(),
            (e) =>
              new D({
                key: e.key,
                userId: e.key,
                type: 99,
                nickname: e.name,
                ...f(e.key),
                ...w(e.key),
                ...R(e.key),
              }),
          );
          return new S(n().concat(t, i, a));
        }
        clone() {
          return new S(this._rows);
        }
        update(e) {
          let t = !1;
          for (let i = 0; i < this._rows.length; i++) {
            let s = this._rows[i],
              n = s.merge(e(s.userId));
            (t = t || n !== s), (this._rows[i] = n);
          }
          return t;
        }
        filter(e, t) {
          return n()(this._rows)
            .filter((e) => {
              if (null == e.user) return !1;
              if (null != t && "" !== t) {
                let i = t.toLowerCase();
                return [e.usernameLower, e.nickname, e.user.globalName]
                  .map((e) => e?.toLowerCase())
                  .some((e) => e?.includes(i));
              }
              return !0;
            })
            .filter((t) => {
              switch (e) {
                case g.m3P.ONLINE:
                  return t.type === g.eA$.FRIEND && t.status !== g.clD.OFFLINE;
                case g.m3P.PENDING:
                  return (
                    (t.type === g.eA$.PENDING_INCOMING &&
                      !t.spam &&
                      !t.ignoredUser) ||
                    t.type === g.eA$.PENDING_OUTGOING
                  );
                case g.m3P.SPAM:
                  return t.type === g.eA$.PENDING_INCOMING && t.spam;
                case g.m3P.PENDING_IGNORED:
                  return t.type === g.eA$.PENDING_INCOMING && t.ignoredUser;
                case g.m3P.SUGGESTIONS:
                  return 99 === t.type;
                case g.m3P.ALL:
                default:
                  return t.type === g.eA$.FRIEND;
              }
            })
            .sortBy((e) => e.comparator)
            .value();
        }
        getRelationshipCounts() {
          let e = {
            [g.eA$.FRIEND]: 0,
            [g.eA$.PENDING_INCOMING]: 0,
            [g.eA$.PENDING_OUTGOING]: 0,
            99: 0,
            [g.eA$.BLOCKED]: 0,
          };
          return (
            this._rows.forEach((t) => {
              null != t.user && null != e[t.type] && e[t.type]++;
            }),
            e
          );
        }
      }
      let L = !0,
        _ = !1,
        O = g.m3P.ONLINE,
        P = new S(),
        k = !0,
        C = !1;
      function F() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        L &&
          (e || (O !== g.m3P.ONLINE && O !== g.m3P.ADD_FRIEND)) &&
          !_ &&
          ((L = !1), (_ = !0), u.A.fetchRelationships());
      }
      function $() {
        if (((L = !0), k ? (_ = !1) : F(), (P = P.reset()), C)) return;
        let e = P.getRelationshipCounts();
        O =
          0 === e[g.eA$.FRIEND]
            ? 0 !== e[g.eA$.PENDING_INCOMING]
              ? g.m3P.PENDING
              : g.m3P.ADD_FRIEND
            : g.m3P.ONLINE;
      }
      function T() {
        P = k ? new S() : P.reset();
      }
      function U(e) {
        return function () {
          return !k && !!P.update(e) && ((P = P.clone()), !0);
        };
      }
      class M extends r.Ay.Store {
        static displayName = "FriendsStore";
        initialize() {
          this.waitFor(
            c.A,
            A.A,
            o.A,
            N.A,
            p.A,
            m.Ay,
            I.A,
            h.Ay,
            d.A,
            E.A,
            y.default,
          ),
            this.syncWith([E.A], T),
            this.syncWith([p.A], T),
            this.syncWith([N.A], T),
            this.syncWith([h.Ay], T),
            this.syncWith([y.default], U(f)),
            this.syncWith([d.A, A.A], U(w)),
            $();
        }
        getState() {
          return { fetching: _, section: O, rows: P };
        }
      }
      let b = new M(a.h, {
        CONNECTION_OPEN: function () {
          $();
        },
        FRIENDS_SET_SECTION: function (e) {
          (O = e.section), F();
        },
        CHANNEL_SELECT: function (e) {
          let { channelId: t } = e;
          return (k = null != t), T(), !k;
        },
        LOAD_RELATIONSHIPS_SUCCESS: function () {
          _ = !1;
        },
        LOAD_RELATIONSHIPS_FAILURE: function () {
          (L = !0), (_ = !0);
        },
        FRIENDS_SET_INITIAL_SECTION: function (e) {
          (O = e.section), (C = !0);
        },
      });
    },
  },
]);
//# sourceMappingURL=37068.9a9a0f75dd272698.js.map
