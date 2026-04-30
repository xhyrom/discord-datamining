"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["10034"],
  {
    700331(e, n, t) {
      t.d(n, { N: () => r, l: () => c });
      var a,
        _ = t(353640),
        d = t(734057),
        i = t(954571),
        l = t(652215),
        r =
          (((a = {}).VIEWER_SWIPE = "number_viewer_swipes"),
          (a.THUMBNAIL_SWIPE = "number_thumbnail_swipes"),
          (a.SELECTED_ITEM_CHANGE = "number_selected_item_changes"),
          (a.ZOOM_IN_BUTTON_PRESSED = "number_zoom_in_button_pressed"),
          (a.ZOOM_IN_IMAGE_PRESSED = "number_zoom_in_image_pressed"),
          (a.ZOOM_OUT_BUTTON_PRESSED = "number_zoom_out_button_pressed"),
          (a.ZOOM_OUT_IMAGE_PRESSED = "number_zoom_out_image_pressed"),
          (a.FORWARD_PRESSED = "number_forward_button_pressed"),
          (a.SAVE_MEDIA_PRESSED = "number_save_media_button_pressed"),
          (a.OPEN_LINK_PRESSED = "number_open_link_button_pressed"),
          (a.MORE_BUTTON_PRESSED = "number_more_button_pressed"),
          (a.COPY_IMAGE_PRESSED = "number_copy_image_more_menu_pressed"),
          (a.COPY_LINK_PRESSED = "number_copy_link_more_menu_pressed"),
          (a.CONTEXT_MENU_OPENED = "number_context_menu_opened"),
          a);
      let s = {
          guildId: void 0,
          channelId: void 0,
          channelType: void 0,
          numMediaItems: 0,
          hasMediaOptions: void 0,
          source: void 0,
          incrementableActions: Object.fromEntries(
            Object.values(r).map((e) => [e, 0]),
          ),
        },
        E = (0, _.v)(() => s),
        c = {
          markSessionStarted: (e) => {
            let n = d.A.getChannel(e.channelId);
            i.default.track(l.HAw.OPEN_MODAL, {
              type: l.JJy.MEDIA_VIEWER,
              source: e.source,
              channel_id: e.channelId,
              channel_type: n?.type,
              guild_id: n?.guild_id,
            }),
              E.setState({
                ...s,
                ...e,
                channelId: e.channelId,
                channelType: n?.type,
                guildId: n?.guild_id,
              });
          },
          markSessionCompleted: () => {
            let e = E.getState();
            i.default.track(l.HAw.MEDIA_VIEWER_SESSION_COMPLETED, {
              source: e.source,
              guild_id: e.guildId,
              channel_id: e.channelId,
              channel_type: e.channelType,
              number_media_items: e.numMediaItems,
              has_media_options: e.hasMediaOptions,
              ...e.incrementableActions,
            }),
              E.setState({ ...s });
          },
          markActionPerformed: (e) => {
            E.setState((n) => ({
              incrementableActions: {
                ...n.incrementableActions,
                [e]: n.incrementableActions[e] + 1,
              },
            }));
          },
          trackMediaViewerImageSaved: (e) => {
            let { url: n, success: t } = e,
              a = E.getState();
            i.default.track(l.HAw.MEDIA_VIEWER_IMAGE_SAVED, {
              url: n,
              success: t,
              channel_id: a.channelId,
            });
          },
          trackMediaViewerImageCopied: (e) => {
            let { url: n, success: t } = e,
              a = E.getState();
            i.default.track(l.HAw.MEDIA_VIEWER_IMAGE_COPIED, {
              url: n,
              success: t,
              channel_id: a.channelId,
            });
          },
          trackMediaViewerLinkCopied: (e) => {
            let { href: n, success: t } = e,
              a = E.getState();
            i.default.track(l.HAw.MEDIA_VIEWER_LINK_COPIED, {
              href: n,
              success: t,
              channel_id: a.channelId,
            });
          },
          trackMediaViewerLinkOpened: (e) => {
            let { href: n } = e,
              t = E.getState();
            i.default.track(l.HAw.MEDIA_VIEWER_LINK_OPENED, {
              href: n,
              channel_id: t.channelId,
            });
          },
          trackMediaViewerDownloadButtonTapped: () => {
            let e = E.getState();
            i.default.track(l.HAw.MEDIA_VIEWER_DOWNLOAD_BUTTON_TAPPED, {
              guild_id: e.guildId,
              channel_id: e.channelId,
              channel_type: e.channelType,
            });
          },
          trackMediaViewerShareButtonTapped: () => {
            let e = E.getState();
            i.default.track(l.HAw.MEDIA_VIEWER_SHARE_BUTTON_TAPPED, {
              guild_id: e.guildId,
              channel_id: e.channelId,
              channel_type: e.channelType,
            });
          },
          trackMessageEmbedsActionCompleted: (e) => {
            let { platform: n, action: t, error: a } = e;
            i.default.track(l.HAw.MESSAGE_EMBEDS_ACTION_COMPLETED, {
              platform: n,
              error: a,
              action: t,
            });
          },
        };
    },
    256905(e, n, t) {
      t.d(n, { K: () => l, R: () => r });
      var a = t(627968),
        _ = t(192308),
        d = t(892491),
        i = t(700331);
      let l = "Media Viewer Modal";
      function r(e, n) {
        let { location: r, contextKey: s, onClose: E, ...c } = e,
          o = c.items[c.startingIndex ?? 0]?.sourceMetadata?.message;
        i.l.markSessionStarted({
          channelId: o?.channel_id,
          numMediaItems: c.items.length,
          source: r,
          hasMediaOptions: !c.shouldHideMediaOptions,
        }),
          (0, _.openModalLazy)(
            async () => {
              let { default: e } = await Promise.all([
                t.e("22513"),
                t.e("40841"),
                t.e("90738"),
                t.e("90261"),
                t.e("26032"),
                t.e("16933"),
                t.e("18125"),
                t.e("65420"),
                t.e("92931"),
                t.e("13498"),
                t.e("89753"),
                t.e("80848"),
                t.e("71543"),
                t.e("27037"),
                t.e("13520"),
                t.e("71934"),
                t.e("88584"),
                t.e("7053"),
                t.e("86483"),
                t.e("39995"),
                t.e("25568"),
                t.e("32260"),
                t.e("40153"),
                t.e("68953"),
                t.e("68495"),
                t.e("55658"),
                t.e("6842"),
                t.e("24199"),
                t.e("57036"),
                t.e("207"),
                t.e("88394"),
                t.e("15380"),
                t.e("61379"),
                t.e("34530"),
                t.e("62680"),
                t.e("76602"),
                t.e("43039"),
                t.e("21825"),
                t.e("98125"),
                t.e("69354"),
                t.e("28154"),
                t.e("18441"),
                t.e("48804"),
                t.e("88077"),
                t.e("80527"),
                t.e("85502"),
                t.e("13681"),
                t.e("53729"),
                t.e("32551"),
                t.e("52367"),
                t.e("23353"),
                t.e("36561"),
                t.e("50015"),
                t.e("47017"),
                t.e("22584"),
                t.e("77998"),
                t.e("31145"),
                t.e("11523"),
                t.e("66900"),
                t.e("1555"),
                t.e("44695"),
                t.e("21690"),
                t.e("10004"),
                t.e("55314"),
                t.e("29177"),
                t.e("44376"),
                t.e("83429"),
                t.e("96905"),
                t.e("33902"),
                t.e("31644"),
                t.e("70653"),
                t.e("993"),
                t.e("54527"),
                t.e("72535"),
                t.e("86949"),
                t.e("76195"),
                t.e("39227"),
                t.e("1177"),
                t.e("26490"),
                t.e("76170"),
                t.e("32817"),
                t.e("36498"),
                t.e("18943"),
                t.e("89094"),
                t.e("84103"),
                t.e("99999"),
                t.e("5501"),
                t.e("11527"),
                t.e("96123"),
                t.e("27168"),
                t.e("31825"),
                t.e("39038"),
                t.e("36320"),
                t.e("6223"),
                t.e("20320"),
                t.e("77245"),
                t.e("31549"),
                t.e("43919"),
                t.e("57906"),
                t.e("39970"),
                t.e("37622"),
                t.e("14879"),
                t.e("51243"),
                t.e("45421"),
                t.e("44265"),
                t.e("99141"),
                t.e("21435"),
                t.e("98793"),
                t.e("25990"),
                t.e("34472"),
                t.e("33584"),
                t.e("63095"),
                t.e("68647"),
                t.e("45723"),
                t.e("67657"),
                t.e("64615"),
                t.e("88017"),
                t.e("87225"),
                t.e("12373"),
                t.e("75134"),
                t.e("84967"),
                t.e("23216"),
                t.e("25582"),
                t.e("30770"),
                t.e("38835"),
                t.e("90889"),
                t.e("78777"),
                t.e("3458"),
                t.e("62827"),
                t.e("73547"),
                t.e("32823"),
                t.e("34691"),
                t.e("99593"),
                t.e("61935"),
                t.e("72789"),
                t.e("62168"),
                t.e("55602"),
                t.e("77793"),
                t.e("13499"),
                t.e("91381"),
                t.e("93158"),
                t.e("58765"),
                t.e("22407"),
                t.e("73500"),
                t.e("25252"),
                t.e("19452"),
                t.e("53526"),
                t.e("65881"),
                t.e("32035"),
                t.e("36126"),
                t.e("51391"),
                t.e("29375"),
                t.e("91942"),
                t.e("48778"),
                t.e("89465"),
                t.e("79440"),
                t.e("78707"),
                t.e("62355"),
                t.e("93708"),
                t.e("71482"),
                t.e("10942"),
                t.e("64480"),
                t.e("49697"),
                t.e("10745"),
                t.e("78651"),
                t.e("77084"),
                t.e("39406"),
                t.e("18024"),
                t.e("36149"),
                t.e("32326"),
                t.e("16916"),
                t.e("80407"),
                t.e("49205"),
                t.e("20382"),
                t.e("12682"),
                t.e("34936"),
                t.e("6687"),
                t.e("59459"),
              ]).then(t.bind(t, 315790));
              return function (n) {
                return (0, a.jsx)(e, {
                  ...n,
                  ...c,
                  onClose: () => {
                    E?.(), n.onClose();
                  },
                });
              };
            },
            {
              modalKey: l,
              contextKey: s,
              onCloseCallback: i.l.markSessionCompleted,
              backdropStyle: d.F.LIGHTBOX,
              stackingBehavior: n,
            },
          );
      }
    },
  },
]);
//# sourceMappingURL=10034.d5f8c7465c9ce27f.js.map
