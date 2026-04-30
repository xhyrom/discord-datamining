"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["36320"],
  {
    183555(e, t, i) {
      i.d(t, { NJ: () => d, of: () => u, pb: () => c });
      var l,
        a = i(627968),
        r = i(64700),
        n = i(132500),
        o = i(688810),
        s = i(47675);
      let _ = r.createContext(null),
        u = (e) => {
          let {
              value: t,
              children: i,
              openedAt: l,
              fetchStartedAt: n,
              fetchEndedAt: u,
              isLoaded: c = !1,
            } = e,
            { analyticsLocations: d } = (0, o.Ay)(),
            p = r.useRef(void 0),
            f = { analyticsLocations: d, value: t },
            m = r.useRef(f);
          return (
            r.useEffect(() => {
              m.current = f;
            }),
            r.useEffect(() => {
              let e = Date.now();
              if ((null == p.current && null != l && (p.current = e - l), !c))
                return;
              let { analyticsLocations: t, value: i } = m.current;
              (0, s.Wn)({ action: "VIEW", analyticsLocations: t, ...i }),
                (0, s.wd)({
                  profileUi: "USER_PROFILE",
                  timeToInteractiveMs: p.current,
                  timeToLoadMs: null != l ? e - l : void 0,
                  timeToFetchMs: null != n && null != u ? u - n : void 0,
                  viewStartedAt: l,
                  fetchStartedAt: n,
                  analyticsLocations: t,
                  ...i,
                });
            }, [c]),
            (0, a.jsx)(_.Provider, { value: t, children: i })
          );
        },
        c = (e) => {
          let {
              layout: t,
              userId: a,
              guildId: o,
              channelId: s,
              messageId: u,
              roleId: c,
              sourceSessionId: d,
              showGuildProfile: p = !0,
            } = e,
            f = (l || (l = i.t(r, 2))).useContext(_)?.sessionId;
          return r.useMemo(
            () => ({
              sessionId: (0, n.A)(),
              sourceSessionId: d ?? f,
              layout: t,
              userId: a,
              guildId: o,
              channelId: s,
              messageId: u,
              roleId: c,
              showGuildProfile: p,
            }),
            [f, t, a, o, s, u, c, d, p],
          );
        },
        d = () => {
          let e = r.useContext(_),
            { analyticsLocations: t } = (0, o.Ay)();
          return {
            context: e,
            trackUserProfileAction: r.useCallback(
              (i) => {
                null != e && (0, s.Wn)({ analyticsLocations: t, ...e, ...i });
              },
              [e, t],
            ),
            trackUserProfileEditAction: r.useCallback(
              (i) => {
                null != e && (0, s.un)({ analyticsLocations: t, ...e, ...i });
              },
              [e, t],
            ),
            trackUserProfileEditSaved: r.useCallback(
              (i) => {
                null != e && (0, s.pT)({ analyticsLocations: t, ...e, ...i });
              },
              [e, t],
            ),
            trackUserProfileWishlistAction: r.useCallback(
              (i) => {
                null != e && (0, s.nR)({ analyticsLocations: t, ...e, ...i });
              },
              [e, t],
            ),
          };
        };
    },
    47675(e, t, i) {
      i.d(t, {
        sQ: () => C,
        Wn: () => g,
        nR: () => w,
        pT: () => b,
        un: () => S,
        wd: () => R,
        Tu: () => y,
        R9: () => T,
        UI: () => h,
        am: () => P,
      }),
        i(321073);
      var l = i(58149),
        a = i(427358),
        r = i(616356),
        n = i(546183),
        o = i(696451),
        s = i(290863),
        _ = i(994500),
        u = i(287809),
        c = i(954571),
        d = i(486020),
        p = i(841595);
      let f = (0, i(945810).mj)({
        kind: "user",
        name: "2026-04-user-profile-performance-analytics",
        defaultConfig: { performanceAnalyticsEnabled: !1 },
        variations: {
          0: { performanceAnalyticsEnabled: !1 },
          1: { performanceAnalyticsEnabled: !0 },
        },
      });
      var m = i(999291),
        A = i(518477),
        E = i(652215),
        I = i(818348);
      let v = (e) => {
          let {
              user: t,
              userProfile: i,
              guildMember: l,
              guildMemberProfile: a,
            } = e,
            r = i ?? a,
            n = [];
          if (
            (l?.nick && n.push(A.d6.NICKNAME),
            r?.pronouns && n.push(A.d6.PRONOUNS),
            t?.avatar)
          ) {
            let e = (0, d.VI)(t?.avatar);
            n.push(e ? A.d6.ANIMATED_AVATAR : A.d6.AVATAR);
          }
          if (r?.banner) {
            let e = (0, d.VI)(r?.banner);
            n.push(e ? A.d6.ANIMATED_BANNER : A.d6.BANNER);
          }
          return (
            r?.bio && n.push(A.d6.BIO),
            r?.themeColors != null &&
              void 0 !== r.themeColors.find((e) => null !== e) &&
              n.push(A.d6.THEME),
            t?.avatarDecoration != null && n.push(A.d6.AVATAR_DECORATION),
            r?.profileEffect != null && n.push(A.d6.PROFILE_EFFECT),
            n
          );
        },
        k = (e) => {
          var t;
          let i,
            l,
            {
              layout: a,
              userId: r,
              guildId: n,
              sessionId: _,
              sourceSessionId: c,
              showGuildProfile: d = !0,
            } = e,
            p = u.default.getUser(r);
          if (null == p) return {};
          let f = (0, m.AP)(p?.id, d ? n : void 0),
            A = d && null != n ? o.Ay.getMember(n, p?.id) : null;
          return {
            profile_layout: a,
            profile_session_id: _,
            source_profile_session_id: c,
            profile_properties: v({ user: p, userProfile: f?._userProfile }),
            guild_profile_properties: v({
              guildMember: A,
              guildMemberProfile: f?._guildMemberProfile,
            }),
            profile_activity_types: s.A.getActivities(p.id)
              .map((e) => {
                let { type: t } = e;
                return t;
              })
              .filter((e) => void 0 !== e),
            profile_badges:
              f
                ?.getBadges()
                ?.map((e) => {
                  let { id: t } = e;
                  return t;
                })
                .filter((e) => "string" == typeof e) ?? [],
            avatar_decoration_sku_id: p.avatarDecoration?.skuId,
            profile_effect_sku_id: f?.profileEffect?.skuId,
            user_status:
              ((t = p.id),
              (i = s.A.getStatus(t)),
              (l = s.A.isMobileOnline(t)),
              i === I.cl.ONLINE && l
                ? `${i}-mobile`
                : i === I.cl.ONLINE
                  ? `${i}-desktop`
                  : i),
            is_guild_profile: f?.guildId != null,
            is_bot_profile: p.bot,
            is_private_to_viewer: f?.private ?? !1,
          };
        },
        h = (e) => {
          let { userId: t } = e;
          if (null == t) return {};
          let i = a.A.getUserAffinity(t);
          return {
            related_user_id: t,
            relationship_type: _.A.getRelationshipType(t),
            related_since: _.A.getSince(t),
            num_mutual_friends: p.A.getMutualFriendsCount(t),
            num_mutual_guilds: p.A.getMutualGuilds(t)?.length,
            communication_probability: i?.communicationProbability,
            communication_rank: i?.communicationRank,
          };
        },
        O = (e) => ({
          application_id: e,
          application_linked:
            null != e &&
            n.default.getFetchStateForApplication(e) === n.FetchState.FETCHED
              ? null != n.default.getNewestTokenForApplication(e)
              : null,
        }),
        g = (e) => {
          let {
            guildId: t,
            channelId: i,
            messageId: a,
            roleId: r,
            widgetType: n,
            analyticsLocations: o,
            action: s,
            section: _,
            applicationId: u,
          } = e;
          c.default.track(E.HAw.USER_PROFILE_ACTION, {
            ...(0, l.H$)(t),
            ...(0, l.Ou)(i),
            ...k(e),
            ...h(e),
            ...O(u),
            location_stack: o,
            profile_action: s,
            profile_section: _,
            source_message_id: a,
            source_role_id: r,
            widget_type: n,
          });
        },
        R = (e) => {
          if (
            !(function (e) {
              let { performanceAnalyticsEnabled: t } = f.getConfig({
                location: e,
              });
              return t;
            })("UserProfileAnalyticsUtils")
          )
            return;
          let {
            guildId: t,
            channelId: i,
            analyticsLocations: a,
            profileUi: r,
            viewStartedAt: n,
            fetchStartedAt: o,
            timeToInteractiveMs: s,
            timeToLoadMs: _,
            timeToFetchMs: u,
          } = e;
          (s ?? 0) <= 0 ||
            (_ ?? 0) <= 0 ||
            (u ?? 0) <= 0 ||
            c.default.track(E.HAw.USER_PROFILE_UI_VIEWED, {
              ...(0, l.H$)(t),
              ...(0, l.Ou)(i),
              ...k(e),
              ...h(e),
              location_stack: a,
              profile_ui: r,
              view_started_at: n,
              fetch_started_at: o,
              time_to_interactive_ms: s,
              time_to_load_ms: _,
              time_to_fetch_ms: u,
            });
        },
        y = (e) => {
          var t;
          let {
            guildId: i,
            channelId: a,
            analyticsLocations: r,
            action: n,
            display: o,
            activity: s,
            stream: _,
            entry: u,
            outbox: d,
            voiceChannelId: p,
          } = e;
          c.default.track(E.HAw.USER_PROFILE_ACTIVITY_ACTION, {
            ...(0, l.H$)(i),
            ...(0, l.Ou)(a),
            ...k(e),
            ...h(e),
            location_stack: r,
            activity_action: n,
            activity_display: o,
            activity_type:
              null == (t = null != _ ? E.$pd.STREAMING : s?.type)
                ? t
                : "VOICE" === t
                  ? "VOICE"
                  : Object.keys(E.$pd)[Object.values(E.$pd).indexOf(t)],
            activity_name: s?.name,
            activity_platform: s?.platform,
            activity_session_id: s?.session_id,
            activity_application_id: s?.application_id,
            item_id: u?.id,
            author_id_v2: u?.author_id,
            item_ids: d?.entries.map((e) => {
              let { id: t } = e;
              return t;
            }),
            author_ids_v2: d?.entries.map((e) => {
              let { author_id: t } = e;
              return t;
            }),
            voice_channel_id: p,
          });
        },
        T = (e) => {
          let { guildId: t, channelId: i, analyticsLocations: a, badge: r } = e;
          c.default.track(E.HAw.USER_PROFILE_BADGE_PRESSED, {
            ...(0, l.H$)(t),
            ...(0, l.Ou)(i),
            ...k(e),
            ...h(e),
            location_stack: a,
            badge: r,
          });
        },
        C = (e) => {
          let { guildId: t, channelId: i, analyticsLocations: a, badge: r } = e;
          c.default.track(E.HAw.USER_PROFILE_BADGE_HOVERED, {
            ...(0, l.H$)(t),
            ...(0, l.Ou)(i),
            ...k(e),
            ...h(e),
            location_stack: a,
            badge: r,
          });
        },
        P = (e) => {
          let { displayProfile: t, isProfileOpen: i } = e,
            l = t?.userId,
            a =
              null != l
                ? s.A.findActivity(l, (e) => {
                    let { type: t } = e;
                    return null != r.A.getAnyStreamForUser(l)
                      ? t === E.$pd.PLAYING
                      : t !== E.$pd.CUSTOM_STATUS;
                  })
                : null;
          c.default.track(E.HAw.DM_PROFILE_TOGGLED, {
            is_profile_open: i,
            has_images: !!(a?.assets?.large_image ?? a?.assets?.small_image),
            is_friend: _.A.isFriend(l),
            viewed_profile_user_id: l,
            profile_has_nitro_customization: t?.hasPremiumCustomization(),
            profile_has_theme_color_customized: t?.hasThemeColors(),
            profile_has_theme_animation: t?.popoutAnimationParticleType != null,
          });
        },
        S = (e) => {
          let {
            guildId: t,
            channelId: i,
            analyticsLocations: a,
            action: r,
            widgetEdited: n,
            gameId: o,
            numResults: s,
            numCharacters: _,
            applicationId: u,
          } = e;
          g({ ...e, action: r }),
            c.default.track(E.HAw.USER_PROFILE_EDIT_ACTION, {
              ...(0, l.H$)(t),
              ...(0, l.Ou)(i),
              ...k(e),
              ...O(u),
              location_stack: a,
              edit_action: r,
              widget_edited: n,
              game_id: o,
              num_results: s,
              num_characters: _,
              application_id: u,
            });
        },
        b = (e) => {
          let {
            guildId: t,
            channelId: i,
            analyticsLocations: a,
            widgetEdited: r,
            gameIds: n,
            tags: o,
            numCharactersCommentary: s,
            isWidgetRemoved: _,
          } = e;
          g({ ...e, action: "EDIT_SAVED" }),
            c.default.track(E.HAw.USER_PROFILE_EDIT_SAVED, {
              ...(0, l.H$)(t),
              ...(0, l.Ou)(i),
              ...k(e),
              location_stack: a,
              widget_edited: r,
              game_ids: n,
              tags: o,
              num_characters_commentary: s,
              is_widget_removed: _,
            });
        },
        w = (e) => {
          let {
            guildId: t,
            channelId: i,
            analyticsLocations: a,
            action: r,
            wishlistId: n,
            skuId: o,
            productLines: s,
          } = e;
          g({ ...e, action: r }),
            c.default.track(E.HAw.USER_PROFILE_WISHLIST_ACTION, {
              ...(0, l.H$)(t),
              ...(0, l.Ou)(i),
              ...k(e),
              location_stack: a,
              action_type: r,
              wishlist_id: n,
              sku_id: o,
              product_lines: null != s ? Array.from(s) : [],
            });
        };
    },
  },
]);
//# sourceMappingURL=36320.c845ea058b269cd0.js.map
