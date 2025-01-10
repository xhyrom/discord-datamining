"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["78447"],
  {
    4646: function (t, e, i) {
      function n(t, e, i) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = i),
          t
        );
      }
      i.d(e, {
        k2: function () {
          return o;
        },
      }),
        i(47120);
      let s = new (i(259443).Yd)("AssetMap");
      async function o(t) {
        let e = new r(),
          i = Object.entries(t).map((t) => {
            let [i, n] = t;
            return e
              .loadRemoteImage(i, n)
              .catch((t) => s.warn("Failed to load canvas asset", t, i, n));
          });
        return await Promise.all(i), e;
      }
      class r {
        loadFonts() {
          return Promise.resolve();
        }
        async loadRemoteImage(t, e) {
          let i = new Image();
          return (
            (i.src = e),
            (i.crossOrigin = "anonymous"),
            await i.decode(),
            (this.assets[t] = i),
            Promise.resolve()
          );
        }
        get(t) {
          return this.assets[t];
        }
        has(t) {
          return null != this.assets[t];
        }
        constructor() {
          n(this, "assets", {}), n(this, "fontManager", void 0);
        }
      }
      e.ZP = r;
    },
    129508: function (t, e, i) {
      i(47120);
      var n = i(512722),
        s = i.n(n),
        o = i(921608),
        r = i(693824);
      function l(t, e, i) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = i),
          t
        );
      }
      e.Z = class t {
        getCanvas() {
          return this.canvas;
        }
        setupOffscreenCanvas() {}
        destroyOffscreenCanvas() {}
        setColor(t) {
          this.color = t;
        }
        setFont(t) {
          var e, i, n, s, o;
          (this.font.style =
            null !== (e = t.style) && void 0 !== e ? e : this.font.style),
            (this.font.size =
              null !== (i = t.size) && void 0 !== i ? i : this.font.size),
            (this.font.weight =
              null !== (n = t.weight) && void 0 !== n ? n : this.font.weight),
            (this.font.family =
              null !== (s = t.family) && void 0 !== s ? s : this.font.family),
            (this.font.truncate =
              null !== (o = t.truncate) && void 0 !== o
                ? o
                : this.font.truncate);
        }
        setFilter(t) {
          var e, i, n, s, o, r, l, a, h;
          (this.filter.blur =
            null !== (e = t.blur) && void 0 !== e ? e : this.filter.blur),
            (this.filter.brightness =
              null !== (i = t.brightness) && void 0 !== i
                ? i
                : this.filter.brightness),
            (this.filter.contrast =
              null !== (n = t.contrast) && void 0 !== n
                ? n
                : this.filter.contrast),
            (this.filter.grayscale =
              null !== (s = t.grayscale) && void 0 !== s
                ? s
                : this.filter.grayscale),
            (this.filter.hueRotation =
              null !== (o = t.hueRotation) && void 0 !== o
                ? o
                : this.filter.hueRotation),
            (this.filter.invert =
              null !== (r = t.invert) && void 0 !== r ? r : this.filter.invert),
            (this.filter.opacity =
              null !== (l = t.opacity) && void 0 !== l
                ? l
                : this.filter.opacity),
            (this.filter.saturate =
              null !== (a = t.saturate) && void 0 !== a
                ? a
                : this.filter.saturate),
            (this.filter.sepia =
              null !== (h = t.sepia) && void 0 !== h ? h : this.filter.sepia);
        }
        getFilterString() {
          let t = [
            "blur(".concat(this.filter.blur, "px)"),
            "hue-rotate(".concat(this.filter.hueRotation, "deg)"),
          ];
          return [
            ...t,
            ...[
              "brightness",
              "contrast",
              "grayscale",
              "invert",
              "opacity",
              "saturate",
              "sepia",
            ].map((t) => "".concat(t, "(").concat(this.filter[t], ")")),
          ].join(" ");
        }
        getLoadedImage(t) {
          s()(
            null != this.assetMap,
            "DiscordCanvas: An AssetStore has not been initialized.",
          );
          let e = this.assetMap.get(t);
          if (void 0 === e) {
            console.error(
              "DiscordCanvas: AssetMap hasn't loaded ".concat(
                t,
                ".  Make sure to load it before trying to render.",
              ),
            );
            return;
          }
          return e;
        }
        drawRoundedImageWithFallbacks(t, e, i, n, s) {
          for (let o of t) {
            let t = this.drawRoundedImage(o, e, i, n, s);
            if (t !== r.vP.Failure) return t;
          }
          return r.vP.Failure;
        }
        constructor(t, e) {
          l(this, "color", "black"),
            l(this, "font", {
              style: "normal",
              weight: 300,
              size: o.n,
              family: ["serif"],
              truncate: r.GX.None,
            }),
            l(this, "filter", {
              blur: 0,
              brightness: 1,
              contrast: 1,
              grayscale: 0,
              hueRotation: 0,
              invert: 0,
              opacity: 1,
              saturate: 1,
              sepia: 0,
            }),
            l(this, "assetMap", void 0),
            l(this, "canvas", void 0),
            (this.canvas = t),
            (this.assetMap = e);
        }
      };
    },
    503082: function (t, e, i) {
      i.d(e, {
        Z: function () {
          return h;
        },
      }),
        i(47120);
      var n = i(512722),
        s = i.n(n),
        o = i(129508),
        r = i(921608),
        l = i(693824);
      function a(t, e, i) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = i),
          t
        );
      }
      class h extends o.Z {
        getCanvasForExport() {
          return this.canvas;
        }
        setContextProperties() {
          null != this.context &&
            ((this.context.fillStyle = this.color),
            (this.context.strokeStyle = this.color),
            (this.context.font = ""
              .concat(this.font.style, " ")
              .concat(this.font.weight, " ")
              .concat(this.font.size, "px ")
              .concat(this.font.family.join(", "))));
        }
        setSize(t, e) {
          let { w: i, h: n } = t;
          null != this.context && null != e
            ? ((this.canvas.width = i * e),
              (this.canvas.height = n * e),
              this.context.scale(e, e))
            : ((this.canvas.width = i), (this.canvas.height = n));
        }
        clearRect(t) {
          if (null == this.context) return;
          let { x: e, y: i, w: n, h: s } = t;
          this.context.clearRect(e, i, n, s);
        }
        restoreContext() {
          null != this.context && this.context.restore();
        }
        drawRect(t) {
          let e =
              !(arguments.length > 1) ||
              void 0 === arguments[1] ||
              arguments[1],
            i =
              !(arguments.length > 2) ||
              void 0 === arguments[2] ||
              arguments[2];
          if (null == this.context) return;
          let { x: n, y: s, w: o, h: r } = t;
          i && this.setContextProperties(),
            e
              ? this.context.fillRect(n, s, o, r)
              : this.context.strokeRect(n, s, o, r);
        }
        drawRoundedRect(t) {
          let e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 0,
            i =
              !(arguments.length > 2) ||
              void 0 === arguments[2] ||
              arguments[2],
            n =
              !(arguments.length > 3) ||
              void 0 === arguments[3] ||
              arguments[3];
          if (null == this.context) return;
          let { x: s, y: o, w: r, h: l } = t;
          n && this.setContextProperties(),
            this.context.beginPath(),
            this.context.roundRect(s, o, r, l, e),
            i ? this.context.fill() : this.context.stroke();
        }
        drawText(t, e, i) {
          var n, o;
          if (null == this.context) return;
          this.setContextProperties();
          let a =
              null !== (n = e.w) && void 0 !== n ? n : this.canvas.width - e.x,
            h = this.context.measureText(t),
            c = !1,
            u = this.font.size,
            d = (t, e) => {
              null != this.context &&
                (i
                  ? this.context.fillText(t, e.x, e.y)
                  : this.context.strokeText(t, e.x, e.y));
            },
            f = (t) => {
              if (null == this.context || h.width <= r.F) return "";
              let e = "".concat(t);
              for (; h.width + r.F > a; )
                (e = e.slice(0, -4)),
                  (h = this.context.measureText(e)),
                  (c = !0);
              return c && (e += "..."), e;
            };
          if (
            (this.font.truncate === l.GX.None && d(t, e),
            this.font.truncate === l.GX.Truncate && d((t = f(t)), e),
            this.font.truncate === l.GX.Wrap)
          ) {
            let i = t.split(" "),
              n = 1 / 0,
              r = "",
              l = 0;
            for (
              null != e.h &&
              ((n = e.h / u),
              s()(
                n > 0,
                "DiscordCavas: boundingBox.h of "
                  .concat(e.h, " results in 0 visible lines with font size of ")
                  .concat(u),
              ));
              i.length > 0;

            )
              if ((h = this.context.measureText(r + " " + i[0])).width > a) {
                let t = !1;
                if (
                  (l + 1 >= n && i.length > 0 && (t = !0),
                  "" !== r
                    ? (d(t ? f(r + "...") : r, { x: e.x, y: e.y + u * l }),
                      (r = ""))
                    : d(f(null !== (o = i.shift()) && void 0 !== o ? o : ""), {
                        x: e.x,
                        y: e.y + u * l,
                      }),
                  t)
                )
                  break;
                l += 1;
              } else
                (r += " ".concat(i.shift())),
                  0 === i.length && d(r, { x: e.x, y: e.y + u * l });
          }
          return {
            x: e.x,
            y: e.y,
            w: h.width,
            h: h.actualBoundingBoxAscent + h.actualBoundingBoxDescent,
          };
        }
        drawFormattedMessage(t, e, i) {
          this.font.truncate === l.GX.Wrap &&
            console.warn(
              "DiscordCavas: `drawFormattedMessage` doesn't currently support wrapping formatted text. The results of this draw likely won't match your expectations.",
            );
          let n = this.font.weight,
            s = (t, e, i) => {
              let s;
              if ("strong" === t.type) this.setFont({ weight: 700 });
              return (
                Array.isArray(t.content)
                  ? (s = o(t.content, e, i))
                  : (s = this.drawText(t.content, e, i)),
                this.setFont({ weight: n }),
                s
              );
            },
            o = (t, e, i) => {
              let n = 0;
              return (
                t.forEach((t) => {
                  let { x: o, y: r, w: l, h: a } = e,
                    h = null != l ? l - n : void 0,
                    c = s(t, { x: o + n, y: r, w: h, h: a }, i);
                  null != c && (n += c.w);
                }),
                { x: e.x + n, y: e.y, w: n, h: this.font.size }
              );
            };
          Array.isArray(t) ? o(t, e, i) : s(t, e, i);
        }
        drawImage(t, e, i) {
          let n =
            arguments.length > 3 && void 0 !== arguments[3]
              ? arguments[3]
              : { fillMode: l.JU.Stretch };
          s()(
            null != this.assetMap,
            "DiscordCavas: `drawImage` requires an AssetMap to be initialized.",
          );
          let { fillMode: o } = n;
          if (null == this.context) return l.vP.Failure;
          this.setContextProperties();
          let r = this.assetMap.get(t);
          if (null == r) return l.vP.ImageNotLoaded;
          if (null != i) {
            if (o === l.JU.Contain) {
              let n;
              let s = { w: r.width, h: r.height },
                o = +(s.w / s.h).toFixed(1);
              if (+(i.w / i.h).toFixed(1) > o) {
                let t = i.h * o;
                n = { x: e.x + (i.w - t) / 2, y: e.y, w: t, h: i.h };
              } else {
                let t = i.w / o;
                n = { x: e.x, y: e.y + (i.h - t) / 2, w: i.w, h: t };
              }
              return (
                this.drawCroppedImage(
                  t,
                  { x: 0, y: 0, w: s.w, h: s.h },
                  { x: n.x, y: n.y, w: n.w, h: n.h },
                ),
                l.vP.Success
              );
            }
            if (o === l.JU.Cover) {
              var a, h, c, u;
              let s;
              let o = { w: r.width, h: r.height },
                d = +(o.w / o.h).toFixed(1),
                f = +(i.w / i.h).toFixed(1);
              if (f > d) {
                let t = o.w / f;
                s = {
                  x: 0,
                  y:
                    (o.h - t) *
                    (null !==
                      (h =
                        null == n
                          ? void 0
                          : null === (a = n.focus) || void 0 === a
                            ? void 0
                            : a.y) && void 0 !== h
                      ? h
                      : 0.5),
                  w: r.width,
                  h: t,
                };
              } else {
                let t = o.h * f;
                s = {
                  x:
                    (r.width - t) *
                    (null !==
                      (u =
                        null == n
                          ? void 0
                          : null === (c = n.focus) || void 0 === c
                            ? void 0
                            : c.x) && void 0 !== u
                      ? u
                      : 0.5),
                  y: 0,
                  w: t,
                  h: r.height,
                };
              }
              return (
                this.drawCroppedImage(t, s, { x: e.x, y: e.y, w: i.w, h: i.h }),
                l.vP.Success
              );
            }
            this.context.drawImage(r, e.x, e.y, i.w, i.h);
          } else this.context.drawImage(r, e.x, e.y);
          return l.vP.Success;
        }
        drawRoundedImage(t, e, i, n, s) {
          if (null == this.context) return l.vP.Failure;
          let { x: o, y: r } = e,
            { w: a, h } = i;
          this.context.save();
          let c = new Path2D();
          c.roundRect(o, r, a, h, n), this.context.clip(c);
          let u = this.drawImage(t, e, i, s);
          return this.restoreContext(), u;
        }
        drawCroppedImage(t, e, i) {
          var n;
          if (null == this.context) return l.vP.Failure;
          let s =
            null === (n = this.assetMap) || void 0 === n ? void 0 : n.get(t);
          if (null == s) return l.vP.ImageNotLoaded;
          let { x: o, y: r, w: a, h: h } = e,
            { x: c, y: u, w: d, h: f } = i;
          return (
            this.context.drawImage(s, o, r, a, h, c, u, d, f), l.vP.Success
          );
        }
        drawPath(t, e) {
          let i =
              !(arguments.length > 2) ||
              void 0 === arguments[2] ||
              arguments[2],
            n =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : 1;
          if (null == this.context) return l.vP.Failure;
          this.setContextProperties(), this.context.save();
          let s = new Path2D(t);
          return (
            this.context.translate(e.x, e.y),
            this.context.scale(n, n),
            i ? this.context.fill(s, "evenodd") : this.context.stroke(s),
            this.restoreContext(),
            l.vP.Success
          );
        }
        setGradientFillStyle(t, e, i) {
          if (null == this.context) return;
          let n = this.context.createLinearGradient(e.x, e.y, i.x, i.y);
          for (let { color: e, stop: i } of t) n.addColorStop(i, e);
          this.context.fillStyle = n;
        }
        drawGradientRect(t, e, i, n) {
          return null == this.context
            ? l.vP.Failure
            : (this.setGradientFillStyle(t, e, i),
              this.drawRect(n, !0, !1),
              l.vP.Success);
        }
        drawRoundedGradientRect(t, e, i, n, s) {
          return null == this.context
            ? l.vP.Failure
            : (this.setGradientFillStyle(t, e, i),
              this.drawRoundedRect(n, s, !0, !1),
              l.vP.Success);
        }
        clip(t, e) {
          if (null == this.context) return;
          this.context.save();
          let { x: i, y: n } = t,
            s = new Path2D(e);
          this.context.translate(i, n), this.context.clip(s);
        }
        clipRect(t, e) {
          if (null == this.context) return;
          this.context.save();
          let { x: i, y: n, w: s, h: o } = t;
          if (e) {
            let t = new Path2D();
            t.moveTo(0, 0),
              t.lineTo(this.canvas.width, 0),
              t.lineTo(this.canvas.width, this.canvas.height),
              t.lineTo(0, this.canvas.height),
              t.lineTo(0, 0),
              t.closePath(),
              t.rect(i, n, s, o),
              this.context.clip(t, "evenodd");
          } else {
            let t = new Path2D();
            t.rect(i, n, s, o), this.context.clip(t);
          }
        }
        clipRoundedRect(t) {
          let e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 0,
            i = arguments.length > 2 ? arguments[2] : void 0;
          if (null == this.context) return;
          this.context.save();
          let { x: n, y: s, w: o, h: r } = t;
          if (i) {
            let t = new Path2D();
            t.moveTo(0, 0),
              t.lineTo(this.canvas.width, 0),
              t.lineTo(this.canvas.width, this.canvas.height),
              t.lineTo(0, this.canvas.height),
              t.lineTo(0, 0),
              t.closePath(),
              t.roundRect(n, s, o, r, e),
              this.context.clip(t, "evenodd");
          } else {
            let t = new Path2D();
            t.roundRect(n, s, o, r, e), this.context.clip(t);
          }
        }
        constructor(t, e) {
          super(t, e),
            a(this, "canvas", void 0),
            a(this, "context", void 0),
            (this.canvas = t),
            (this.context = this.canvas.getContext("2d")),
            null != this.context &&
              (this.context.imageSmoothingQuality = "high");
        }
      }
    },
    921608: function (t, e, i) {
      i.d(e, {
        F: function () {
          return n;
        },
        n: function () {
          return s;
        },
      });
      let n = 12,
        s = 24;
    },
    693824: function (t, e, i) {
      var n, s, o, r, l, a, h, c;
      i.d(e, {
        GX: function () {
          return n;
        },
        JU: function () {
          return s;
        },
        kH: function () {
          return o;
        },
        vP: function () {
          return r;
        },
      }),
        ((l = n || (n = {}))[(l.None = 0)] = "None"),
        (l[(l.Truncate = 1)] = "Truncate"),
        (l[(l.Wrap = 2)] = "Wrap"),
        ((a = s || (s = {}))[(a.Stretch = 0)] = "Stretch"),
        (a[(a.Contain = 1)] = "Contain"),
        (a[(a.Cover = 2)] = "Cover"),
        ((h = o || (o = {}))[(h.Base64 = 0)] = "Base64"),
        (h[(h.Blob = 1)] = "Blob"),
        (h[(h.File = 2)] = "File"),
        (h[(h.CloudUpload = 3)] = "CloudUpload"),
        ((c = r || (r = {}))[(c.Success = 0)] = "Success"),
        (c[(c.Failure = 1)] = "Failure"),
        (c[(c.ImageNotLoaded = 2)] = "ImageNotLoaded");
    },
  },
]);
//# sourceMappingURL=b1aefae64727dd8e72c4.js.map
