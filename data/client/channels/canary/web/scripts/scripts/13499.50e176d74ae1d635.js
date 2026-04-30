"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["13499"],
  {
    997509(e, t, r) {
      r.d(t, { A: () => f });
      var n = r(110259),
        i = r(765178),
        l = r(636537),
        o = r(228366),
        E = r(398590),
        s = r(626584),
        _ = r(646269),
        a = r(568185),
        I = r(529942),
        u = r(164956),
        d = r(857071),
        S = r(976860),
        T = r(138298),
        c = r(495544),
        G = r(696451),
        h = r(71393),
        A = r(499785),
        D = r(555337),
        L = r(652215),
        U = r(985018);
      let N = new s.A("GuildSettingsActionCreators"),
        p = {
          init(e, t, r, n) {
            o.h.dispatch({
              type: "GUILD_SETTINGS_INIT",
              guildId: e,
              section: t,
              subsection: n,
              location: r,
            });
          },
          async open(e, t, n, i) {
            await Promise.all([
              r.e("87904"),
              r.e("50992"),
              r.e("48071"),
              r.e("99786"),
              r.e("76831"),
              r.e("88584"),
              r.e("28149"),
              r.e("90261"),
              r.e("80848"),
              r.e("97219"),
              r.e("89753"),
              r.e("76348"),
              r.e("98944"),
              r.e("42105"),
              r.e("89603"),
              r.e("78220"),
              r.e("40841"),
              r.e("16933"),
              r.e("90738"),
              r.e("13520"),
              r.e("92931"),
              r.e("22513"),
              r.e("13498"),
              r.e("71543"),
              r.e("27037"),
              r.e("71934"),
              r.e("65420"),
              r.e("7053"),
              r.e("86483"),
              r.e("39995"),
              r.e("25568"),
              r.e("32260"),
              r.e("40153"),
              r.e("68953"),
              r.e("26032"),
              r.e("68495"),
              r.e("18125"),
              r.e("99961"),
              r.e("69273"),
              r.e("77083"),
              r.e("63009"),
              r.e("45650"),
              r.e("97189"),
              r.e("55990"),
              r.e("62296"),
              r.e("7066"),
              r.e("333"),
              r.e("68432"),
              r.e("79705"),
              r.e("55658"),
              r.e("76032"),
              r.e("48006"),
              r.e("87080"),
              r.e("73607"),
              r.e("63635"),
              r.e("10889"),
              r.e("87845"),
              r.e("45317"),
              r.e("23551"),
              r.e("73099"),
              r.e("41161"),
              r.e("61175"),
              r.e("45229"),
              r.e("31227"),
              r.e("83040"),
              r.e("55498"),
              r.e("18824"),
              r.e("56574"),
              r.e("4974"),
              r.e("80186"),
              r.e("51507"),
              r.e("23924"),
              r.e("71470"),
              r.e("24199"),
              r.e("57036"),
              r.e("207"),
              r.e("88394"),
              r.e("15380"),
              r.e("19402"),
              r.e("49681"),
              r.e("96382"),
              r.e("22687"),
              r.e("34786"),
              r.e("62052"),
              r.e("63202"),
              r.e("82596"),
              r.e("20287"),
              r.e("28367"),
              r.e("35429"),
              r.e("10471"),
              r.e("63232"),
              r.e("64827"),
              r.e("23808"),
              r.e("11301"),
              r.e("60235"),
              r.e("61737"),
              r.e("79428"),
              r.e("29963"),
              r.e("47834"),
              r.e("30938"),
              r.e("20317"),
              r.e("84569"),
              r.e("2368"),
              r.e("24313"),
              r.e("74016"),
              r.e("48405"),
              r.e("12544"),
              r.e("19551"),
              r.e("7743"),
              r.e("45959"),
              r.e("18573"),
              r.e("55936"),
              r.e("31988"),
              r.e("71751"),
              r.e("39667"),
              r.e("26073"),
              r.e("34303"),
              r.e("28866"),
              r.e("8304"),
              r.e("58038"),
              r.e("93159"),
              r.e("11566"),
              r.e("10556"),
              r.e("94723"),
              r.e("62931"),
              r.e("81987"),
              r.e("50417"),
              r.e("58007"),
              r.e("5812"),
              r.e("27602"),
              r.e("83157"),
              r.e("88941"),
              r.e("61379"),
              r.e("34530"),
              r.e("62680"),
              r.e("76602"),
              r.e("21825"),
              r.e("98125"),
              r.e("69354"),
              r.e("28154"),
              r.e("18441"),
              r.e("88077"),
              r.e("80527"),
              r.e("85502"),
              r.e("28229"),
              r.e("13681"),
              r.e("32551"),
              r.e("52367"),
              r.e("23353"),
              r.e("36561"),
              r.e("50015"),
              r.e("47017"),
              r.e("76418"),
              r.e("22584"),
              r.e("77998"),
              r.e("31145"),
              r.e("11523"),
              r.e("66900"),
              r.e("1555"),
              r.e("44695"),
              r.e("21690"),
              r.e("10004"),
              r.e("55314"),
              r.e("29177"),
              r.e("44376"),
              r.e("83429"),
              r.e("21921"),
              r.e("91007"),
              r.e("9233"),
              r.e("96905"),
              r.e("33902"),
              r.e("31644"),
              r.e("70653"),
              r.e("993"),
              r.e("54527"),
              r.e("76195"),
              r.e("39227"),
              r.e("86949"),
              r.e("69747"),
              r.e("1177"),
              r.e("26490"),
              r.e("76170"),
              r.e("32817"),
              r.e("36498"),
              r.e("40258"),
              r.e("18943"),
              r.e("66495"),
              r.e("89094"),
              r.e("84103"),
              r.e("9915"),
              r.e("99999"),
              r.e("5501"),
              r.e("28561"),
              r.e("91146"),
              r.e("11527"),
              r.e("27168"),
              r.e("31825"),
              r.e("39038"),
              r.e("88342"),
              r.e("6223"),
              r.e("20320"),
              r.e("77245"),
              r.e("8891"),
              r.e("31549"),
              r.e("43919"),
              r.e("57906"),
              r.e("42724"),
              r.e("43437"),
              r.e("39970"),
              r.e("37622"),
              r.e("14879"),
              r.e("51243"),
              r.e("82263"),
              r.e("44265"),
              r.e("99141"),
              r.e("98793"),
              r.e("92731"),
              r.e("25990"),
              r.e("34472"),
              r.e("33584"),
              r.e("63095"),
              r.e("68647"),
              r.e("45723"),
              r.e("8555"),
              r.e("67657"),
              r.e("64615"),
              r.e("87225"),
              r.e("12373"),
              r.e("75134"),
              r.e("84967"),
              r.e("86127"),
              r.e("25582"),
              r.e("30770"),
              r.e("38835"),
              r.e("78777"),
              r.e("21570"),
              r.e("6174"),
              r.e("39851"),
              r.e("42451"),
              r.e("62827"),
              r.e("73547"),
              r.e("34691"),
              r.e("99593"),
              r.e("72789"),
              r.e("62168"),
              r.e("55602"),
              r.e("77793"),
              r.e("91381"),
              r.e("93158"),
              r.e("22407"),
              r.e("10034"),
              r.e("6949"),
              r.e("29871"),
              r.e("73500"),
              r.e("25252"),
              r.e("17249"),
              r.e("19452"),
              r.e("53526"),
              r.e("65881"),
              r.e("35027"),
              r.e("53917"),
              r.e("54975"),
              r.e("32035"),
              r.e("36126"),
              r.e("9640"),
              r.e("62422"),
              r.e("51391"),
              r.e("15423"),
              r.e("29375"),
              r.e("91942"),
              r.e("48778"),
              r.e("26295"),
              r.e("79440"),
              r.e("88599"),
              r.e("78707"),
              r.e("62355"),
              r.e("93708"),
              r.e("71482"),
              r.e("36863"),
              r.e("67861"),
              r.e("1518"),
              r.e("15186"),
              r.e("10942"),
              r.e("98765"),
              r.e("23354"),
              r.e("64480"),
              r.e("89088"),
              r.e("82644"),
              r.e("37187"),
              r.e("3589"),
              r.e("71273"),
              r.e("49697"),
              r.e("71133"),
              r.e("10957"),
              r.e("55973"),
              r.e("20590"),
              r.e("45172"),
              r.e("78651"),
              r.e("65437"),
              r.e("34983"),
              r.e("63235"),
              r.e("74810"),
              r.e("28083"),
              r.e("80830"),
              r.e("86814"),
              r.e("52548"),
              r.e("77265"),
              r.e("75842"),
              r.e("53984"),
              r.e("80854"),
              r.e("79780"),
              r.e("35395"),
              r.e("43780"),
              r.e("77084"),
              r.e("14041"),
              r.e("46844"),
              r.e("45413"),
              r.e("22822"),
              r.e("86672"),
              r.e("96565"),
              r.e("90664"),
              r.e("79745"),
              r.e("64850"),
              r.e("72401"),
              r.e("22855"),
              r.e("70104"),
              r.e("52617"),
              r.e("2564"),
              r.e("47417"),
              r.e("19558"),
              r.e("58946"),
              r.e("14285"),
              r.e("95752"),
              r.e("78100"),
              r.e("95093"),
              r.e("37687"),
              r.e("8362"),
              r.e("62615"),
              r.e("2698"),
              r.e("62875"),
              r.e("4744"),
              r.e("20007"),
              r.e("34654"),
              r.e("48900"),
              r.e("501"),
              r.e("46769"),
              r.e("33297"),
              r.e("73384"),
              r.e("82783"),
              r.e("86243"),
              r.e("32209"),
              r.e("60177"),
              r.e("27773"),
              r.e("39171"),
              r.e("37021"),
              r.e("21976"),
              r.e("21049"),
              r.e("1006"),
              r.e("71268"),
              r.e("95370"),
              r.e("55577"),
              r.e("97784"),
              r.e("79707"),
              r.e("23276"),
              r.e("9662"),
              r.e("10567"),
              r.e("80239"),
              r.e("63645"),
              r.e("59880"),
              r.e("27084"),
              r.e("88343"),
              r.e("78412"),
              r.e("77446"),
              r.e("5636"),
              r.e("63213"),
              r.e("95444"),
              r.e("38472"),
              r.e("68479"),
              r.e("48720"),
              r.e("834"),
              r.e("3217"),
              r.e("84150"),
              r.e("5557"),
              r.e("54791"),
              r.e("44780"),
              r.e("83952"),
              r.e("19871"),
              r.e("255"),
              r.e("62718"),
              r.e("24170"),
              r.e("84317"),
              r.e("89916"),
              r.e("39286"),
              r.e("58984"),
              r.e("54961"),
              r.e("14461"),
              r.e("31445"),
              r.e("59957"),
              r.e("54625"),
              r.e("166"),
              r.e("17859"),
              r.e("49145"),
              r.e("60773"),
              r.e("68763"),
              r.e("94503"),
              r.e("15188"),
              r.e("33134"),
              r.e("20858"),
              r.e("18024"),
              r.e("77473"),
              r.e("28152"),
              r.e("29666"),
              r.e("58273"),
              r.e("8018"),
              r.e("92295"),
              r.e("20930"),
              r.e("26001"),
              r.e("26574"),
              r.e("14591"),
              r.e("52111"),
              r.e("58337"),
              r.e("30997"),
              r.e("28136"),
              r.e("57458"),
              r.e("49520"),
              r.e("65826"),
              r.e("42204"),
              r.e("18997"),
              r.e("78195"),
              r.e("20683"),
              r.e("35996"),
              r.e("1243"),
              r.e("63618"),
              r.e("16084"),
              r.e("97073"),
              r.e("49089"),
              r.e("72877"),
              r.e("26437"),
              r.e("72963"),
              r.e("22261"),
              r.e("44057"),
              r.e("83420"),
              r.e("36149"),
              r.e("87317"),
              r.e("10943"),
              r.e("80007"),
              r.e("15920"),
              r.e("32326"),
              r.e("37977"),
              r.e("58164"),
              r.e("21930"),
              r.e("3930"),
              r.e("16916"),
              r.e("78046"),
              r.e("3663"),
              r.e("65617"),
              r.e("74021"),
              r.e("78050"),
              r.e("13708"),
              r.e("967"),
              r.e("84971"),
              r.e("71217"),
              r.e("37490"),
              r.e("49205"),
              r.e("97069"),
              r.e("66580"),
              r.e("20382"),
              r.e("80093"),
              r.e("12682"),
              r.e("38601"),
              r.e("74907"),
              r.e("32207"),
              r.e("73669"),
              r.e("30221"),
              r.e("7775"),
              r.e("47018"),
              r.e("22547"),
              r.e("60989"),
              r.e("82486"),
              r.e("29413"),
              r.e("63333"),
              r.e("3710"),
              r.e("31638"),
              r.e("27779"),
              r.e("80436"),
              r.e("41250"),
              r.e("58216"),
              r.e("36150"),
              r.e("73165"),
              r.e("45830"),
              r.e("34268"),
              r.e("64072"),
              r.e("61058"),
              r.e("50342"),
              r.e("38042"),
              r.e("28752"),
              r.e("19475"),
              r.e("33097"),
              r.e("22744"),
              r.e("15172"),
              r.e("2329"),
              r.e("5896"),
              r.e("68904"),
              r.e("11471"),
              r.e("22266"),
              r.e("49333"),
              r.e("14396"),
              r.e("44385"),
              r.e("94607"),
              r.e("30474"),
              r.e("77602"),
              r.e("60178"),
              r.e("75834"),
              r.e("75627"),
              r.e("10262"),
              r.e("6809"),
              r.e("62213"),
              r.e("21574"),
              r.e("65065"),
              r.e("29961"),
              r.e("95602"),
              r.e("46313"),
              r.e("84820"),
              r.e("49345"),
              r.e("68802"),
              r.e("49490"),
              r.e("10142"),
              r.e("44912"),
              r.e("18792"),
              r.e("17460"),
              r.e("8563"),
              r.e("18489"),
              r.e("36674"),
              r.e("70008"),
              r.e("61099"),
              r.e("98254"),
              r.e("2412"),
              r.e("4551"),
              r.e("96777"),
              r.e("29569"),
              r.e("36002"),
              r.e("88913"),
              r.e("82178"),
              r.e("43233"),
              r.e("59791"),
              r.e("41786"),
              r.e("96680"),
              r.e("36163"),
              r.e("24689"),
              r.e("91643"),
              r.e("63874"),
              r.e("63726"),
              r.e("71329"),
              r.e("93907"),
              r.e("60249"),
              r.e("38090"),
              r.e("68214"),
              r.e("10014"),
              r.e("81202"),
              r.e("43114"),
              r.e("61437"),
              r.e("46149"),
              r.e("98425"),
              r.e("83827"),
              r.e("3168"),
              r.e("22088"),
              r.e("42749"),
              r.e("56026"),
              r.e("16301"),
              r.e("22191"),
              r.e("25961"),
              r.e("30501"),
              r.e("8364"),
              r.e("86779"),
              r.e("91139"),
              r.e("25660"),
              r.e("10637"),
              r.e("66147"),
              r.e("89541"),
              r.e("74337"),
              r.e("95841"),
              r.e("37801"),
              r.e("52823"),
              r.e("56967"),
              r.e("53203"),
              r.e("47011"),
              r.e("31203"),
              r.e("33416"),
              r.e("66913"),
              r.e("39353"),
              r.e("84783"),
              r.e("9793"),
              r.e("71719"),
              r.e("2098"),
              r.e("13848"),
              r.e("88256"),
              r.e("39214"),
              r.e("99108"),
              r.e("14878"),
              r.e("88307"),
              r.e("26508"),
              r.e("61347"),
              r.e("21750"),
              r.e("19781"),
              r.e("83799"),
              r.e("73091"),
              r.e("95067"),
              r.e("97116"),
              r.e("86692"),
              r.e("79211"),
              r.e("90213"),
              r.e("16237"),
              r.e("6996"),
              r.e("16373"),
              r.e("81398"),
              r.e("93767"),
              r.e("24484"),
              r.e("3960"),
              r.e("44943"),
              r.e("32347"),
              r.e("8458"),
              r.e("11810"),
              r.e("48111"),
              r.e("90152"),
              r.e("91218"),
              r.e("87973"),
              r.e("57197"),
              r.e("14863"),
              r.e("84951"),
              r.e("72238"),
              r.e("71167"),
              r.e("12390"),
              r.e("66016"),
              r.e("34409"),
              r.e("83518"),
              r.e("61309"),
              r.e("94529"),
              r.e("78"),
              r.e("98371"),
              r.e("21300"),
              r.e("57060"),
              r.e("37038"),
              r.e("52212"),
              r.e("52694"),
              r.e("53683"),
              r.e("15062"),
              r.e("14656"),
              r.e("39855"),
              r.e("71790"),
              r.e("98356"),
              r.e("52191"),
              r.e("15046"),
              r.e("41913"),
              r.e("98700"),
            ]).then(r.bind(r, 422559)),
              h.A.getGuild(e)?.features.has(L.GuildFeatures.COMMUNITY) &&
                (t === L.BEX.GUILD_AUTOMOD &&
                  ((t = L.BEX.SAFETY), (i = L.nd0.SAFETY_AUTOMOD)),
                t === L.BEX.MEMBER_VERIFICATION &&
                  ((t = L.BEX.SAFETY),
                  (i = L.nd0.SAFETY_DM_AND_SPAM_PROTECTION))),
              p.init(e, t, n, i),
              T.A.closeGuildSidebar(e),
              (0, E.id)(L.zgK.GUILD_SETTINGS);
          },
          close() {
            o.h.dispatch({ type: "GUILD_SETTINGS_CLOSE" });
          },
          saveRouteStack(e) {
            o.h.dispatch({ type: "GUILD_SETTINGS_SAVE_ROUTE_STACK", state: e });
          },
          setSection(e, t) {
            let r = D.A.getGuildId();
            null != r &&
              (h.A.getGuild(r)?.features.has(L.GuildFeatures.COMMUNITY) &&
                (e === L.BEX.GUILD_AUTOMOD &&
                  ((e = L.BEX.SAFETY), (t = L.nd0.SAFETY_AUTOMOD)),
                e === L.BEX.MEMBER_VERIFICATION &&
                  ((e = L.BEX.SAFETY),
                  (t = L.nd0.SAFETY_DM_AND_SPAM_PROTECTION))),
              o.h.dispatch({
                type: "GUILD_SETTINGS_SET_SECTION",
                section: e,
                subsection: t,
              }));
          },
          setSearchQuery(e) {
            o.h.dispatch({
              type: "GUILD_SETTINGS_SET_SEARCH_QUERY",
              searchQuery: e,
            });
          },
          selectRole: (e, t) =>
            o.h.dispatch({
              type: "GUILD_SETTINGS_ROLE_SELECT",
              roleId: e,
              searchQuery: t,
            }),
          updateEmbed: (e, t, r) =>
            l.Bo.patch({
              url: L.Rsh.GUILD_WIDGET(e),
              body: { enabled: t, channel_id: r },
              oldFormErrors: !0,
              rejectWithError: !0,
            }).then((t) => {
              o.h.dispatch({
                type: "GUILD_SETTINGS_SET_WIDGET",
                guildId: e,
                enabled: t.body.enabled,
                channelId: t.body.channel_id,
              });
            }),
          updateMFALevel(e) {
            let { guildId: t, level: r } = e;
            return l.Bo.post({
              url: L.Rsh.GUILD_MFA(t),
              body: { level: r },
              oldFormErrors: !0,
              rejectWithError: !1,
            }).then((e) =>
              o.h.dispatch({
                type: "GUILD_SETTINGS_SET_MFA_SUCCESS",
                level: e.body.level,
              }),
            );
          },
          updateIcon(e, t) {
            l.Bo.patch({
              url: L.Rsh.GUILD(e),
              body: { icon: t },
              oldFormErrors: !0,
              rejectWithError: !1,
            }).then(
              () => {
                o.h.dispatch({ type: "GUILD_SETTINGS_UPDATE", icon: t }),
                  a.A.checkGuildTemplateDirty(e);
              },
              (e) =>
                o.h.dispatch({
                  type: "GUILD_SETTINGS_SUBMIT_FAILURE",
                  errors: e.body,
                }),
            );
          },
          cancelChanges(e) {
            o.h.dispatch({ type: "GUILD_SETTINGS_CANCEL_CHANGES", guildId: e });
          },
          updateGuild(e) {
            let { safetyAlertsChannelId: t, profile: r, ...n } = e,
              i = { ...n };
            null != r && (i.profile = { ...(i.profile ?? {}), ...r }),
              null != D.A.getGuildId() &&
                null != t &&
                (i.safetyAlertsChannelId = t),
              o.h.dispatch({ type: "GUILD_SETTINGS_UPDATE", ...i });
          },
          updateGuildProfile(e, t) {
            o.h.dispatch({
              type: "GUILD_SETTINGS_PROFILE_UPDATE",
              guildId: e,
              ...t,
            });
          },
          saveGuild(e, t) {
            let {
                name: r,
                description: n,
                icon: i,
                splash: E,
                banner: s,
                homeHeader: I,
                afkChannelId: u,
                afkTimeout: d,
                systemChannelId: S,
                verificationLevel: T,
                defaultMessageNotifications: c,
                explicitContentFilter: G,
                features: h,
                systemChannelFlags: A,
                preferredLocale: D,
                rulesChannelId: U,
                safetyAlertsChannelId: p,
                ownerConfiguredContentLevel: f,
                discoverySplash: R,
                publicUpdatesChannelId: y,
                premiumProgressBarEnabled: C,
                profile: O,
                moderatorReportingEnabled: g,
                officialMessageColor: M,
                verificationRoleId: m,
              } = t,
              P =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {},
              b = {
                name: r,
                description: n,
                icon: i,
                splash: E,
                banner: s,
                home_header: I,
                features: h,
                preferred_locale: D,
                afk_channel_id: u,
                afk_timeout: d,
                system_channel_id: S,
                verification_level: T,
                default_message_notifications: c,
                explicit_content_filter: G,
                system_channel_flags: A,
                rules_channel_id: U,
                owner_configured_content_level: f,
                discovery_splash: R,
                public_updates_channel_id: y,
                safety_alerts_channel_id: p,
                ...(null != C ? { premium_progress_bar_enabled: C } : null),
                profile: null != O ? (0, _.N)(O) : O,
                moderator_reporting_enabled: g,
                official_message_color: M,
                verification_role_id: m,
              };
            return (
              o.h.dispatch({ type: "GUILD_SETTINGS_SUBMIT" }),
              l.Bo.patch({
                url: L.Rsh.GUILD(e),
                query: { for_discovery: P.isForDiscovery },
                body: b,
                oldFormErrors: !0,
                rejectWithError: !1,
              }).then(
                (t) => {
                  o.h.dispatch({
                    type: "GUILD_SETTINGS_SUBMIT_SUCCESS",
                    guild: t.body,
                  }),
                    a.A.checkGuildTemplateDirty(e);
                },
                (e) => {
                  if (
                    (o.h.dispatch({
                      type: "GUILD_SETTINGS_SUBMIT_FAILURE",
                      errors: e.body,
                    }),
                    N.error("Failed to save guild settings", {
                      errors: e.body,
                    }),
                    P.throwErr)
                  )
                    throw e.body;
                },
              )
            );
          },
          updateGuildModeration: (e, t) =>
            l.Bo.patch({
              url: L.Rsh.GUILD(e),
              body: {
                verification_level: t.verificationLevel,
                explicit_content_filter: t.explicitContentFilter,
              },
              oldFormErrors: !0,
              rejectWithError: !1,
            }).then((t) => (a.A.checkGuildTemplateDirty(e), t)),
          transferOwnership(e, t) {
            let r =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : null,
              i =
                arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : null;
            return A.A.patch({
              url: L.Rsh.GUILD(e),
              body: { owner_id: t, code: i },
              oldFormErrors: !0,
              trackedActionData: {
                event: n.NetworkActionNames.GUILD_TRANSFER_OWNERSHIP,
                properties: { guild_id: e, verification_type: r },
              },
              rejectWithError: !1,
            });
          },
          sendTransferOwnershipPincode(e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return A.A.put({
              url: L.Rsh.GUILD_PINCODE(e),
              oldFormErrors: !0,
              trackedActionData: {
                event: n.NetworkActionNames.GUILD_TRANSFER_OWNERSHIP_SEND_CODE,
                properties: { guild_id: e, is_resend: t },
              },
              rejectWithError: !1,
            });
          },
          deleteGuild: (e) =>
            l.Bo.post({
              url: L.Rsh.GUILD_DELETE(e),
              oldFormErrors: !0,
              rejectWithError: !1,
            }).then(() => {
              p.close();
            }),
          async leaveGuild(e) {
            let t =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              r = d.A.isLurking(e);
            await l.Bo.del({
              url: L.Rsh.GUILD_LEAVE(e),
              body: { lurking: r || G.Ay.isCurrentUserGuest(e) },
              oldFormErrors: !0,
              rejectWithError: !1,
            }).then(() => {
              i.O.announce(U.intl.string(U.t["7iPyVW"]));
            }),
              p.close(),
              t && r && (0, S.pX)(L.BVt.GUILD_DISCOVERY);
          },
          async updateMemberRoles(e, t, r, n, i) {
            u.A.isFullServerPreview(e) && t === c.default.getId()
              ? (0, I.ID)(e, r)
              : (await l.Bo.patch({
                  url: L.Rsh.GUILD_MEMBER(e, t),
                  body: { roles: r },
                  oldFormErrors: !0,
                  rejectWithError: !1,
                }),
                n.forEach((r) =>
                  o.h.dispatch({
                    type: "GUILD_ROLE_MEMBER_ADD",
                    guildId: e,
                    roleId: r,
                    userId: t,
                  }),
                ),
                i.forEach((r) =>
                  o.h.dispatch({
                    type: "GUILD_ROLE_MEMBER_REMOVE",
                    guildId: e,
                    roleId: r,
                    userId: t,
                  }),
                ));
          },
          bulkAddMemberRoles: (e, t, r) =>
            l.Bo.patch({
              url: L.Rsh.GUILD_ROLE_MEMBERS(e, t),
              body: { member_ids: r },
              rejectWithError: !1,
            }).then((r) => {
              o.h.dispatch({
                type: "GUILD_ROLE_MEMBER_BULK_ADD",
                guildId: e,
                roleId: t,
                added: r.body,
              });
            }),
          enableIntegration: (e, t, r) =>
            l.Bo.post({
              url: L.Rsh.GUILD_INTEGRATIONS(e),
              body: { type: t, id: r },
              oldFormErrors: !0,
              rejectWithError: !1,
            }),
          disableIntegration: (e, t) =>
            l.Bo.del({
              url: L.Rsh.GUILD_INTEGRATION(e, t),
              oldFormErrors: !0,
              rejectWithError: !1,
            }),
          updateIntegration: (e, t, r, n, i) =>
            l.Bo.patch({
              url: L.Rsh.GUILD_INTEGRATION(e, t),
              body: {
                expire_behavior: r,
                expire_grace_period: n,
                enable_emoticons: i,
              },
              oldFormErrors: !0,
              rejectWithError: !1,
            }),
          syncIntegration(e, t) {
            l.Bo.post({
              url: L.Rsh.GUILD_INTEGRATION_SYNC(e, t),
              oldFormErrors: !0,
              rejectWithError: !1,
            });
          },
          async migratePinPermission(e) {
            await l.Bo.post({
              url: L.Rsh.GUILD_MIGRATE_PIN_PERMISSION(e),
              rejectWithError: !0,
            }).then(() =>
              o.h.dispatch({
                type: "GUILD_SETTINGS_PIN_PERMISSION_MIGRATED",
                guildId: e,
              }),
            );
          },
          async migrateSlowmodePermission(e) {
            await l.Bo.post({
              url: L.Rsh.GUILD_MIGRATE_SLOWMODE_PERMISSION(e),
              rejectWithError: !0,
            }).then(() =>
              o.h.dispatch({
                type: "GUILD_SETTINGS_SLOWMODE_PERMISSION_MIGRATED",
                guildId: e,
              }),
            );
          },
          async migratePermissions(e, t) {
            let { migratePin: r, migrateSlowmode: n } = t;
            r && (await p.migratePinPermission(e)),
              n && (await p.migrateSlowmodePermission(e));
          },
        },
        f = p;
    },
    555337(e, t, r) {
      let n, i, l, o, E, s, _, a, I, u;
      r.d(t, { A: () => eG }), r(938796);
      var d = r(735438),
        S = r.n(d),
        T = r(989349),
        c = r.n(T),
        G = r(17928),
        h = r(636537),
        A = r(506774),
        D = r(228366),
        L = r(867051),
        U = r(837011),
        N = r(95701),
        p = r(260509),
        f = r(671759),
        R = r(889227),
        y = r(71393),
        C = r(287809),
        O = r(860689),
        g = r(935208),
        M = r(794967),
        m = r(310527),
        P = r(595818),
        b = r(652215),
        B = r(324580),
        F = r(124759);
      let v = [
          "name",
          "description",
          "icon",
          "splash",
          "banner",
          "homeHeader",
          "afkChannelId",
          "afkTimeout",
          "systemChannelId",
          "verificationLevel",
          "defaultMessageNotifications",
          "explicitContentFilter",
          "features",
          "systemChannelFlags",
          "preferredLocale",
          "rulesChannelId",
          "safetyAlertsChannelId",
          "ownerConfiguredContentLevel",
          "discoverySplash",
          "publicUpdatesChannelId",
          "premiumProgressBarEnabled",
          "officialMessageColor",
          "verificationRoleId",
        ],
        w = [
          "brandColorPrimary",
          "description",
          "icon",
          "name",
          "traits",
          "visibility",
          "gameApplicationIds",
          "customBanner",
          "tag",
          "badge",
          "badgeColorPrimary",
          "badgeColorSecondary",
        ],
        V = new Set([
          "icon",
          "splash",
          "banner",
          "discoverySplash",
          "homeHeader",
        ]),
        Y = !1,
        k = b.XlH.CLOSED,
        x = {},
        W = null,
        X = !1,
        j = !1,
        H = !1,
        J = null,
        K = null,
        Z = null,
        q = 0,
        Q = b.EkJ.NONE,
        z = null,
        $ = {
          primaryCategoryId: B.ig,
          secondaryCategoryIds: [],
          keywords: [],
          emojiDiscoverabilityEnabled: !0,
          partnerActionedTimestamp: null,
          partnerApplicationTimestamp: null,
          isPublished: !1,
          reasonsToJoin: [],
          socialLinks: [],
          about: "",
        },
        ee = !1,
        et = $,
        er = $,
        en = null,
        ei = 0,
        el = null,
        eo = null,
        eE = null;
      function es(e) {
        if (null == E || null == o || o.id !== e) return !1;
        let t = y.A.getGuild(e);
        return null != t && (o === E ? (E = o = t) : (o = t), !0);
      }
      function e_(e) {
        let { guildId: t, section: r, subsection: i, location: l } = e,
          I = y.A.getGuild(t);
        if (null == I) return ea();
        let d = U.A.getProfile(t);
        (o = E = I),
          (s = _ = d),
          (H = j),
          (K = J),
          (k = b.XlH.OPEN),
          (x = {}),
          (W = null),
          (a = g.default.castGuildIdAsEveryoneGuildRoleId(t)),
          (Q = E.mfaLevel),
          (er = et),
          (u = null),
          (z = l),
          eI({ section: r ?? n ?? (0, P.x)(), subsection: i ?? null });
      }
      function ea() {
        (Y = !1),
          (k = b.XlH.CLOSED),
          (o = E = null),
          (X = !1),
          (H = !1),
          (K = null),
          (Z = null),
          (q = 0),
          (en = null),
          (eo = null),
          (eE = null),
          (n = null),
          (i = null),
          (l = null),
          (Q = b.EkJ.NONE),
          (I = void 0);
      }
      function eI(e) {
        if (null == E) return !1;
        let t = n;
        if (
          ((n = e.section),
          (i = e.subsection),
          n === b.BEX.INSTANT_INVITES || n === b.BEX.INVITES)
        )
          h.Bo.get({
            url: b.Rsh.GUILD_INSTANT_INVITES(E.id),
            oldFormErrors: !0,
            rejectWithError: !0,
          }).then((e) => {
            D.h.dispatch({
              type: "GUILD_SETTINGS_LOADED_INVITES",
              invites: e.body,
            });
          });
        else if (n === b.BEX.INTEGRATIONS || n === b.BEX.ROLES) {
          if (((a = null), t !== e.section)) return ed(e);
        } else
          n === b.BEX.MEMBERS
            ? (a = (0, p.af)(E))
            : n === b.BEX.VANITY_URL
              ? (0, m.Je)(E.id)
              : n === b.BEX.SAFETY &&
                D.h.dispatch({
                  type: "GUILD_SETTINGS_SAFETY_SET_SUBSECTION",
                  subsection: null == i ? b.nd0.SAFETY_OVERVIEW : i,
                });
      }
      function eu(e) {
        return new f.A({
          code: e.code,
          temporary: e.temporary,
          revoked: e.revoked,
          inviter: null != e.inviter ? new R.A(e.inviter) : null,
          channel: (0, N.OY)(e.channel),
          guild: null != e.guild ? (0, O.DY)(e.guild) : null,
          uses: e.uses,
          maxUses: e.max_uses,
          maxAge: e.max_age,
          createdAt: c()(e.created_at ?? void 0),
          flags: e.flags,
          roles: e.roles,
        });
      }
      function ed(e) {
        if (
          null == E ||
          k !== b.XlH.OPEN ||
          ("GUILD_INTEGRATIONS_UPDATE" === e.type && e.guildId !== E.id)
        )
          return !1;
        (0, M.c)(E.id);
      }
      function eS(e) {
        let { guildId: t } = e;
        if (null == E || E.id !== t) return !1;
        W = null;
      }
      function eT(e) {
        let { guildId: t, error: r } = e;
        if (null == E || E.id !== t) return !1;
        W = r;
      }
      class ec extends G.Ay.Store {
        static displayName = "GuildSettingsStore";
        initialize() {
          this.waitFor(y.A, U.A, C.default);
        }
        getMetadata() {
          return er;
        }
        widgetHasChanges() {
          return !1 !== X && (H !== j || K !== J);
        }
        hasChanges() {
          return (
            !S().isEqual(E, o) ||
            !S().isEqual(er, et) ||
            !S().isEqual(_, s) ||
            this.widgetHasChanges()
          );
        }
        isOpen() {
          return Y;
        }
        getSavedRouteState() {
          return I;
        }
        getSection() {
          return n;
        }
        showNotice() {
          return this.hasChanges();
        }
        getGuildId() {
          return null != E ? E.id : null;
        }
        showPublicSuccessModal() {
          return !A.w.get(F.wX);
        }
        getGuild() {
          return E;
        }
        getGuildProfile() {
          return _;
        }
        getWidget() {
          return { enabled: H, channelId: K };
        }
        isSubmitting() {
          return k === b.XlH.SUBMITTING;
        }
        isGuildMetadataLoaded() {
          return ee;
        }
        getErrors() {
          return x;
        }
        getError(e) {
          return x[e] ?? null;
        }
        getProfileError() {
          return W;
        }
        getSelectedRoleId() {
          return a;
        }
        getSlug() {
          return u;
        }
        getBans() {
          return [en, ei];
        }
        getProps() {
          return {
            submitting: this.isSubmitting(),
            integrations: eE,
            section: n,
            subsection: i,
            errors: x,
            guild: E,
            bans: en,
            bansVersion: ei,
            invites: eo,
            selectedRoleId: a,
            fetchedEmbed: X,
            embedEnabled: H,
            embedChannelId: K,
            mfaLevel: Q,
            searchQuery: l,
            vanityURLCode: Z,
            vanityURLUses: q,
            originalGuild: o,
            hasChanges: this.hasChanges(),
            guildMetadata: er,
            analyticsLocation: z,
            isGuildMetadataLoaded: ee,
            originalProfile: s,
            profile: _,
          };
        }
      }
      let eG = new ec(
        D.h,
        __OVERLAY__
          ? {}
          : {
              GUILD_SETTINGS_INIT: e_,
              GUILD_SETTINGS_OPEN: function (e) {
                (Y = !0), e_(e);
              },
              GUILD_SETTINGS_CLOSE: ea,
              GUILD_SETTINGS_UPDATE: function (e) {
                let t;
                if (null == E) return !1;
                v.forEach((t) => {
                  null != E &&
                    e.hasOwnProperty(t) &&
                    (E = (0, L.hZ)(E, t, e[t] ?? null));
                }),
                  null == (t = E) || v.some((e) => t[e] !== o[e]) || (E = o);
              },
              GUILD_SETTINGS_PROFILE_UPDATE: function (e) {
                let { guildId: t } = e;
                if (null == _ || null == E || E.id !== t) return !1;
                w.forEach((t) => {
                  if (null != _ && e.hasOwnProperty(t)) {
                    let r = e[t];
                    void 0 !== r && (_ = { ..._, [t]: r });
                  }
                });
              },
              GUILD_SETTINGS_CANCEL_CHANGES: function (e) {
                let { guildId: t } = e;
                x = {};
                let r = y.A.getGuild(t);
                null != r && (o = E = r);
              },
              GUILD_SETTINGS_SAVE_ROUTE_STACK: function (e) {
                let { state: t } = e;
                return (I = t), !1;
              },
              GUILD_SETTINGS_SUBMIT: function () {
                (k = b.XlH.SUBMITTING), (x = {});
              },
              GUILD_SETTINGS_SUBMIT_SUCCESS: function () {
                k = b.XlH.OPEN;
              },
              GUILD_SETTINGS_SUBMIT_FAILURE: function (e) {
                (k = b.XlH.OPEN),
                  (n = n ?? (0, P.x)()),
                  (i = null),
                  (x = e.errors ?? {});
              },
              GUILD_SETTINGS_SET_SECTION: eI,
              GUILD_SETTINGS_SET_SEARCH_QUERY: function (e) {
                l = e.searchQuery;
              },
              GUILD_SETTINGS_LOADED_BANS: function (e) {
                (en = e.bans.reduce(
                  (e, t) => (
                    null != t.user && null != t.user.id && e.set(t.user.id, t),
                    e
                  ),
                  new Map(),
                )),
                  ei++;
              },
              GUILD_SETTINGS_LOADED_BANS_BATCH: function (e) {
                let { bans: t, guildId: r } = e;
                (el !== r || null == en) && ((el = r), (en = new Map())),
                  (en = t.reduce(
                    (e, t) => (
                      null != t.user &&
                        null != t.user.id &&
                        e.set(t.user.id, t),
                      e
                    ),
                    en,
                  )),
                  ei++;
              },
              GUILD_SETTINGS_LOADED_INVITES: function (e) {
                eo = e.invites.reduce((e, t) => ((e[t.code] = eu(t)), e), {});
              },
              GUILD_SETTINGS_SET_WIDGET: function (e) {
                (X = !0), (j = H = e.enabled), (J = K = e.channelId);
              },
              GUILD_SETTINGS_SET_VANITY_URL: function (e) {
                (Z = e.code ?? null), (q = e.uses);
              },
              GUILD_SETTINGS_SET_MFA_SUCCESS: function (e) {
                let { level: t } = e;
                Q = t;
              },
              GUILD_SETTINGS_ROLE_SELECT: function (e) {
                let { roleId: t } = e;
                a = t ?? null;
              },
              GUILD_SETTINGS_LOADED_INTEGRATIONS: function (e) {
                eE = e.integrations;
              },
              GUILD_SETTINGS_PIN_PERMISSION_MIGRATED: function (e) {
                let { guildId: t } = e;
                if (null == E || t !== E.id) return !1;
                E = (0, L.hZ)(
                  E,
                  "features",
                  new Set([
                    ...E.features,
                    b.GuildFeatures.PIN_PERMISSION_MIGRATION_COMPLETE,
                  ]),
                );
              },
              GUILD_SETTINGS_SLOWMODE_PERMISSION_MIGRATED: function (e) {
                let { guildId: t } = e;
                if (null == E || t !== E.id) return !1;
                E = (0, L.hZ)(
                  E,
                  "features",
                  new Set([
                    ...E.features,
                    b.GuildFeatures
                      .BYPASS_SLOWMODE_PERMISSION_MIGRATION_COMPLETE,
                  ]),
                );
              },
              GUILD_BAN_ADD: function (e) {
                let { user: t, guildId: r } = e;
                if (null == en || null == E || E.id !== r) return !1;
                en.set(t.id, { user: t, reason: null }), ei++;
              },
              GUILD_BAN_REMOVE: function (e) {
                let { user: t, guildId: r } = e;
                if (null == en || null == E || E.id !== r) return !1;
                en.delete(t.id), ei++;
              },
              GUILD_ROLE_CREATE: function (e) {
                let { guildId: t } = e;
                if (!es(t)) return !1;
              },
              GUILD_ROLE_UPDATE: function (e) {
                let { guildId: t } = e;
                if (!es(t)) return !1;
              },
              GUILD_ROLE_DELETE: function (e) {
                let { guildId: t, roleId: r } = e;
                if (!es(t)) return !1;
                a === r && (a = null);
              },
              GUILD_UPDATE: function (e) {
                if (null == E || E.id !== e.guild.id) return !1;
                {
                  let e = y.A.getGuild(E.id);
                  if (null == e) return !1;
                  if (
                    ((s = U.A.getProfile(E.id)),
                    n !== b.BEX.PROFILE && n !== b.BEX.TAG && (_ = s),
                    n === b.BEX.PROFILE)
                  ) {
                    (o = e), (E = e);
                    return;
                  }
                  let t = (o = e),
                    r = { ...E };
                  v.forEach((n) => {
                    if (
                      !V.has(n) &&
                      (("rulesChannelId" !== n &&
                        "publicUpdatesChannelId" !== n) ||
                        r[n] !== F.SP) &&
                      "features" !== n
                    ) {
                      if ("ownerConfiguredContentLevel" === n) {
                        t = (0, L.hZ)(t, n, e[n]);
                        return;
                      }
                      t = (0, L.hZ)(t, n, r[n]);
                    }
                  }),
                    (E = t);
                }
              },
              GUILD_DELETE: function (e) {
                if (null == E || E.id !== e.guild.id) return !1;
                ea();
              },
              GUILD_PROFILE_FETCH_SUCCESS: function (e) {
                let { profile: t } = e;
                t.id === E?.id && (s = _ = t);
              },
              GUILD_PROFILE_UPDATE: eS,
              GUILD_PROFILE_UPDATE_SUCCESS: function (e) {
                let { profile: t } = e;
                if (_?.id == null || !es(_.id)) return !1;
                t.id === E?.id && ((s = _ = t), (W = null));
              },
              GUILD_PROFILE_UPDATE_FAILURE: eT,
              GUILD_PROFILE_UPDATE_VISIBILITY: eS,
              GUILD_PROFILE_UPDATE_VISIBILITY_SUCCESS: function (e) {
                let { guildId: t } = e;
                if (_?.id == null || !es(_.id)) return !1;
                t === E?.id && ((s = _ = U.A.getProfile(t)), (W = null));
              },
              GUILD_PROFILE_UPDATE_VISIBILITY_FAILURE: eT,
              USER_CONNECTIONS_UPDATE: ed,
              GUILD_INTEGRATIONS_UPDATE: ed,
              INSTANT_INVITE_REVOKE_SUCCESS: function (e) {
                (eo = { ...eo }), delete eo[e.code];
              },
              INSTANT_INVITE_CREATE_SUCCESS: function (e) {
                eo = { ...eo, [e.invite.code]: eu(e.invite) };
              },
              GUILD_UPDATE_DISCOVERY_METADATA_FROM_SERVER: function (e) {
                let { guildId: t, metadata: r } = e;
                null != E &&
                  t === E.id &&
                  (!1 === ee && (ee = !0),
                  (er = et =
                    {
                      primaryCategoryId: r.primaryCategoryId ?? B.ig,
                      secondaryCategoryIds: r.secondaryCategoryIds ?? [],
                      keywords: r.keywords ?? [],
                      emojiDiscoverabilityEnabled:
                        r.emojiDiscoverabilityEnabled ?? !0,
                      partnerActionedTimestamp:
                        r.partnerActionedTimestamp ?? null,
                      partnerApplicationTimestamp:
                        r.partnerApplicationTimestamp ?? null,
                      isPublished: r.isPublished ?? !1,
                      reasonsToJoin: r.reasonsToJoin ?? [],
                      socialLinks: r.socialLinks ?? [],
                      about: r.about ?? "",
                    }),
                  (x = {}));
              },
              GUILD_DISCOVERY_METADATA_FETCH_FAIL: function () {
                et = er = $;
              },
              GUILD_DISCOVERY_CATEGORY_ADD: function (e) {
                let { guildId: t, categoryId: r } = e;
                null != E &&
                  t === E.id &&
                  ((er = {
                    ...er,
                    secondaryCategoryIds: [...er.secondaryCategoryIds, r],
                  }),
                  (et = {
                    ...et,
                    secondaryCategoryIds: [...et.secondaryCategoryIds, r],
                  }));
              },
              GUILD_DISCOVERY_CATEGORY_DELETE: function (e) {
                let t,
                  { guildId: r, categoryId: n } = e;
                if (null == E || r !== E.id) return;
                let i = er.secondaryCategoryIds.indexOf(n);
                -1 !== i &&
                  ((t = [...er.secondaryCategoryIds]).splice(i, 1),
                  (er = { ...er, secondaryCategoryIds: t })),
                  -1 !== (i = et.secondaryCategoryIds.indexOf(n)) &&
                    ((t = [...et.secondaryCategoryIds]).splice(i, 1),
                    (et = { ...et, secondaryCategoryIds: t }));
              },
              GUILD_DISCOVERY_CATEGORY_UPDATE_FAIL: function (e) {
                let { guildId: t, errors: r } = e;
                null != E && t === E.id && (x = r ?? {});
              },
              GUILD_UPDATE_DISCOVERY_METADATA: function (e) {
                let {
                  guildId: t,
                  primaryCategoryId: r,
                  keywords: n,
                  emojiDiscoverabilityEnabled: i,
                  isPublished: l,
                  reasonsToJoin: o,
                  socialLinks: s,
                  about: _,
                } = e;
                null != E &&
                  t === E.id &&
                  (er = {
                    ...er,
                    primaryCategoryId: null != r ? r : er.primaryCategoryId,
                    keywords: null != n ? n : er.keywords,
                    emojiDiscoverabilityEnabled:
                      i ?? er.emojiDiscoverabilityEnabled,
                    isPublished: l ?? er.isPublished,
                    reasonsToJoin: null != o ? o : er.reasonsToJoin,
                    socialLinks: null != s ? s : er.socialLinks,
                    about: null != _ ? _ : er.about,
                  });
              },
              GUILD_UPDATE_DISCOVERY_METADATA_FAIL: function (e) {
                let { guildId: t, errors: r } = e;
                null != E && t === E.id && (x = r ?? {});
              },
              GUILD_DISCOVERY_SLUG_FETCH_SUCCESS: function (e) {
                let { slug: t } = e;
                u = t;
              },
              GUILD_DISCOVERY_SLUG_FETCH_FAIL: function (e) {
                let {} = e;
                u = null;
              },
              GUILD_SETTINGS_WIDGET_UPDATE: function (e) {
                let { guildId: t, enabled: r, channelId: n } = e;
                if (null == E || E.id !== t) return !1;
                (H = r), (K = n);
              },
            },
      );
    },
    310527(e, t, r) {
      r.d(t, { Je: () => o, OH: () => s, fx: () => E, zf: () => _ });
      var n = r(636537),
        i = r(228366),
        l = r(652215);
      function o(e) {
        return n.Bo.get({
          url: l.Rsh.GUILD_VANITY_URL(e),
          oldFormErrors: !0,
          rejectWithError: !0,
        }).then((e) => {
          let {
            body: { code: t, uses: r, error: n },
          } = e;
          i.h.dispatch({
            type: "GUILD_SETTINGS_SET_VANITY_URL",
            code: t,
            uses: r,
            error: n,
          });
        });
      }
      function E() {
        i.h.dispatch({ type: "GUILD_SETTINGS_VANITY_URL_RESET" });
      }
      function s(e) {
        i.h.dispatch({ type: "GUILD_SETTINGS_VANITY_URL_SET", code: e });
      }
      function _(e, t, r) {
        return n.Bo.patch({
          url: l.Rsh.GUILD_VANITY_URL(e),
          body: { code: t },
          oldFormErrors: !0,
          rejectWithError: !1,
        }).then(
          (e) => {
            let {
              body: { code: t, uses: r },
            } = e;
            i.h.dispatch({
              type: "GUILD_SETTINGS_SET_VANITY_URL",
              code: t,
              uses: r,
            });
          },
          (e) => {
            if (
              (i.h.dispatch({
                type: "GUILD_SETTINGS_VANITY_URL_ERROR",
                error: e.body,
              }),
              r?.throwErr)
            )
              throw e;
            return e;
          },
        );
      }
    },
    124759(e, t, r) {
      r.d(t, {
        SP: () => _,
        Vi: () => E,
        bK: () => d,
        dH: () => u,
        dR: () => a,
        e$: () => I,
        hs: () => s,
        pj: () => S,
        wX: () => o,
      });
      var n,
        i = r(136722),
        l = r(652215);
      let o = "publicSuccessModalSeen",
        E = "667560445975986187",
        s = "669627189624307712",
        _ = "1",
        a = [
          l.xBc.ADMINISTRATOR,
          l.xBc.KICK_MEMBERS,
          l.xBc.BAN_MEMBERS,
          l.xBc.MANAGE_GUILD,
          l.xBc.MANAGE_CHANNELS,
          l.xBc.MANAGE_ROLES,
          l.xBc.MANAGE_MESSAGES,
          l.xBc.MANAGE_GUILD_EXPRESSIONS,
          l.xBc.CREATE_GUILD_EXPRESSIONS,
          l.xBc.MANAGE_EVENTS,
          l.xBc.CREATE_EVENTS,
          l.xBc.MODERATE_MEMBERS,
          l.xBc.MENTION_EVERYONE,
          l.xBc.MANAGE_OFFICIAL_MESSAGES,
        ],
        I = i.kg(...a),
        u = 1e3,
        d = "Enable Community Modal";
      var S =
        (((n = {}).INTRO = "intro"),
        (n.SAFETY_CHECK = "safety_check"),
        (n.BASICS = "basics"),
        (n.FINISH = "finish"),
        (n.RULES = "rules"),
        n);
    },
    432017(e, t, r) {
      r.d(t, { T: () => E });
      var n = r(627968);
      r(64700);
      var i = r(661531),
        l = r(996682),
        o = r(27989);
      let E = (e) => {
        let {
            size: t = "md",
            width: r,
            height: E,
            color: s = i.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: _ = "",
            ...a
          } = e,
          I = (0, o.J)(t),
          u = I?.width ?? r,
          d = I?.height ?? E;
        return (0, n.jsx)("svg", {
          ...(0, l.A)(a),
          xmlns: "http://www.w3.org/2000/svg",
          width: u,
          height: d,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, n.jsx)("path", {
            fill: "string" == typeof s ? s : s.css,
            d: "M8.65 1.51A2 2 0 0 0 6 3.41v9.88A3.98 3.98 0 0 0 4.5 13C2.57 13 1 14.34 1 16s1.57 3 3.5 3S8 17.66 8 16V5.4l11 3.81v7.08a3.98 3.98 0 0 0-1.5-.29c-1.93 0-3.5 1.34-3.5 3s1.57 3 3.5 3 3.5-1.34 3.5-3V7.03c0-.74-.47-1.4-1.18-1.65L8.65 1.51Z",
            className: _,
          }),
        });
      };
    },
    599026(e, t, r) {
      r.d(t, { A: () => i });
      var n,
        i =
          (((n = {})[(n.NAME = 0)] = "NAME"),
          (n[(n.STATE = 1)] = "STATE"),
          (n[(n.DETAILS = 2)] = "DETAILS"),
          n);
    },
  },
]);
//# sourceMappingURL=13499.50e176d74ae1d635.js.map
