"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["78447"],
  {
    4646: function (t, e, n) {
      function i(t, e, n) {
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
      n.d(e, {
        k2: function () {
          return o;
        },
      }),
        n(47120);
      let s = new (n(259443).Yd)("AssetMap");
      async function o(t) {
        let e = new r(),
          n = Object.entries(t).map((t) => {
            let [n, i] = t;
            return e
              .loadRemoteImage(n, i)
              .catch((t) => s.warn("Failed to load canvas asset", t, n, i));
          });
        return await Promise.all(n), e;
      }
      class r {
        loadFonts() {
          return Promise.resolve();
        }
        async loadRemoteImage(t, e) {
          let n = new Image();
          return (
            (n.src = e),
            (n.crossOrigin = "anonymous"),
            await n.decode(),
            (this.assets[t] = n),
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
          i(this, "assets", {}), i(this, "fontManager", void 0);
        }
      }
      e.ZP = r;
    },
    129508: function (t, e, n) {
      n(47120);
      var i = n(512722),
        s = n.n(i),
        o = n(921608),
        r = n(693824);
      function l(t, e, n) {
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
      e.Z = class t {
        getCanvas() {
          return this.canvas;
        }
        setColor(t) {
          this.color = t;
        }
        setFont(t) {
          var e, n, i, s, o;
          (this.font.style =
            null !== (e = t.style) && void 0 !== e ? e : this.font.style),
            (this.font.size =
              null !== (n = t.size) && void 0 !== n ? n : this.font.size),
            (this.font.weight =
              null !== (i = t.weight) && void 0 !== i ? i : this.font.weight),
            (this.font.family =
              null !== (s = t.family) && void 0 !== s ? s : this.font.family),
            (this.font.truncate =
              null !== (o = t.truncate) && void 0 !== o
                ? o
                : this.font.truncate);
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
        drawRoundedImageWithFallbacks(t, e, n, i, s) {
          for (let o of t) {
            let t = this.drawRoundedImage(o, e, n, i, s);
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
            l(this, "assetMap", void 0),
            l(this, "canvas", void 0),
            (this.canvas = t),
            (this.assetMap = e);
        }
      };
    },
    503082: function (t, e, n) {
      n.d(e, {
        Z: function () {
          return h;
        },
      }),
        n(47120);
      var i = n(512722),
        s = n.n(i),
        o = n(129508),
        r = n(921608),
        l = n(693824);
      function a(t, e, n) {
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
          let { w: n, h: i } = t;
          null != this.context && null != e
            ? ((this.canvas.width = n * e),
              (this.canvas.height = i * e),
              this.context.scale(e, e))
            : ((this.canvas.width = n), (this.canvas.height = i));
        }
        clearRect(t) {
          if (null == this.context) return;
          let { x: e, y: n, w: i, h: s } = t;
          this.context.clearRect(e, n, i, s);
        }
        restoreContext() {
          null != this.context && this.context.restore();
        }
        drawRect(t) {
          let e =
              !(arguments.length > 1) ||
              void 0 === arguments[1] ||
              arguments[1],
            n =
              !(arguments.length > 2) ||
              void 0 === arguments[2] ||
              arguments[2];
          if (null == this.context) return;
          let { x: i, y: s, w: o, h: r } = t;
          n && this.setContextProperties(),
            e
              ? this.context.fillRect(i, s, o, r)
              : this.context.strokeRect(i, s, o, r);
        }
        drawRoundedRect(t) {
          let e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 0,
            n =
              !(arguments.length > 2) ||
              void 0 === arguments[2] ||
              arguments[2],
            i =
              !(arguments.length > 3) ||
              void 0 === arguments[3] ||
              arguments[3];
          if (null == this.context) return;
          let { x: s, y: o, w: r, h: l } = t;
          i && this.setContextProperties(),
            this.context.beginPath(),
            this.context.roundRect(s, o, r, l, e),
            n ? this.context.fill() : this.context.stroke();
        }
        drawText(t, e, n) {
          var i, o;
          if (null == this.context) return;
          this.setContextProperties();
          let a =
              null !== (i = e.w) && void 0 !== i ? i : this.canvas.width - e.x,
            h = this.context.measureText(t),
            c = !1,
            u = this.font.size,
            d = (t, e) => {
              null != this.context &&
                (n
                  ? this.context.fillText(t, e.x, e.y)
                  : this.context.strokeText(t, e.x, e.y));
            },
            x = (t) => {
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
            this.font.truncate === l.GX.Truncate && d((t = x(t)), e),
            this.font.truncate === l.GX.Wrap)
          ) {
            let n = t.split(" "),
              i = 1 / 0,
              r = "",
              l = 0;
            for (
              null != e.h &&
              ((i = e.h / u),
              s()(
                i > 0,
                "DiscordCavas: boundingBox.h of "
                  .concat(e.h, " results in 0 visible lines with font size of ")
                  .concat(u),
              ));
              n.length > 0;

            )
              if ((h = this.context.measureText(r + " " + n[0])).width > a) {
                let t = !1;
                if (
                  (l + 1 >= i && n.length > 0 && (t = !0),
                  "" !== r
                    ? (d(t ? x(r + "...") : r, { x: e.x, y: e.y + u * l }),
                      (r = ""))
                    : d(x(null !== (o = n.shift()) && void 0 !== o ? o : ""), {
                        x: e.x,
                        y: e.y + u * l,
                      }),
                  t)
                )
                  break;
                l += 1;
              } else
                (r += " ".concat(n.shift())),
                  0 === n.length && d(r, { x: e.x, y: e.y + u * l });
          }
          return {
            x: e.x,
            y: e.y,
            w: h.width,
            h: h.actualBoundingBoxAscent + h.actualBoundingBoxDescent,
          };
        }
        drawFormattedMessage(t, e, n) {
          this.font.truncate === l.GX.Wrap &&
            console.warn(
              "DiscordCavas: `drawFormattedMessage` doesn't currently support wrapping formatted text. The results of this draw likely won't match your expectations.",
            );
          let i = this.font.weight,
            s = (t, e, n) => {
              let s;
              if ("strong" === t.type) this.setFont({ weight: 700 });
              return (
                Array.isArray(t.content)
                  ? (s = o(t.content, e, n))
                  : (s = this.drawText(t.content, e, n)),
                this.setFont({ weight: i }),
                s
              );
            },
            o = (t, e, n) => {
              let i = 0;
              return (
                t.forEach((t) => {
                  let { x: o, y: r, w: l, h: a } = e,
                    h = null != l ? l - i : void 0,
                    c = s(t, { x: o + i, y: r, w: h, h: a }, n);
                  null != c && (i += c.w);
                }),
                { x: e.x + i, y: e.y, w: i, h: this.font.size }
              );
            };
          Array.isArray(t) ? o(t, e, n) : s(t, e, n);
        }
        drawImage(t, e, n) {
          let i =
            arguments.length > 3 && void 0 !== arguments[3]
              ? arguments[3]
              : { fillMode: l.JU.Stretch };
          s()(
            null != this.assetMap,
            "DiscordCavas: `drawImage` requires an AssetMap to be initialized.",
          );
          let { fillMode: o } = i;
          if (null == this.context) return l.vP.Failure;
          let r = this.assetMap.get(t);
          if (null == r) return l.vP.ImageNotLoaded;
          if (null != n) {
            if (o === l.JU.Contain) {
              let i;
              let s = { w: r.width, h: r.height },
                o = +(s.w / s.h).toFixed(1);
              if (+(n.w / n.h).toFixed(1) > o) {
                let t = n.h * o;
                i = { x: e.x + (n.w - t) / 2, y: e.y, w: t, h: n.h };
              } else {
                let t = n.w / o;
                i = { x: e.x, y: e.y + (n.h - t) / 2, w: n.w, h: t };
              }
              return (
                this.drawCroppedImage(
                  t,
                  { x: 0, y: 0, w: s.w, h: s.h },
                  { x: i.x, y: i.y, w: i.w, h: i.h },
                ),
                l.vP.Success
              );
            }
            if (o === l.JU.Cover) {
              var a, h, c, u;
              let s;
              let o = { w: r.width, h: r.height },
                d = +(o.w / o.h).toFixed(1),
                x = +(n.w / n.h).toFixed(1);
              if (x > d) {
                let t = o.w / x;
                s = {
                  x: 0,
                  y:
                    (o.h - t) *
                    (null !==
                      (h =
                        null == i
                          ? void 0
                          : null === (a = i.focus) || void 0 === a
                            ? void 0
                            : a.y) && void 0 !== h
                      ? h
                      : 0.5),
                  w: r.width,
                  h: t,
                };
              } else {
                let t = o.h * x;
                s = {
                  x:
                    (r.width - t) *
                    (null !==
                      (u =
                        null == i
                          ? void 0
                          : null === (c = i.focus) || void 0 === c
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
                this.drawCroppedImage(t, s, { x: e.x, y: e.y, w: n.w, h: n.h }),
                l.vP.Success
              );
            }
            this.context.drawImage(r, e.x, e.y, n.w, n.h);
          } else this.context.drawImage(r, e.x, e.y);
          return l.vP.Success;
        }
        drawRoundedImage(t, e, n, i, s) {
          if (null == this.context) return l.vP.Failure;
          let { x: o, y: r } = e,
            { w: a, h } = n;
          this.context.save();
          let c = new Path2D();
          c.roundRect(o, r, a, h, i), this.context.clip(c);
          let u = this.drawImage(t, e, n, s);
          return this.restoreContext(), u;
        }
        drawCroppedImage(t, e, n) {
          var i;
          if (null == this.context) return l.vP.Failure;
          let s =
            null === (i = this.assetMap) || void 0 === i ? void 0 : i.get(t);
          if (null == s) return l.vP.ImageNotLoaded;
          let { x: o, y: r, w: a, h: h } = e,
            { x: c, y: u, w: d, h: x } = n;
          return (
            this.context.drawImage(s, o, r, a, h, c, u, d, x), l.vP.Success
          );
        }
        drawPath(t, e) {
          let n =
              !(arguments.length > 2) ||
              void 0 === arguments[2] ||
              arguments[2],
            i =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : 1;
          if (null == this.context) return l.vP.Failure;
          this.setContextProperties(), this.context.save();
          let s = new Path2D(t);
          return (
            this.context.translate(e.x, e.y),
            this.context.scale(i, i),
            n ? this.context.fill(s, "evenodd") : this.context.stroke(s),
            this.restoreContext(),
            l.vP.Success
          );
        }
        setGradientFillStyle(t, e, n) {
          if (null == this.context) return;
          let i = this.context.createLinearGradient(e.x, e.y, n.x, n.y);
          for (let { color: e, stop: n } of t) i.addColorStop(n, e);
          this.context.fillStyle = i;
        }
        drawGradientRect(t, e, n, i) {
          return null == this.context
            ? l.vP.Failure
            : (this.setGradientFillStyle(t, e, n),
              this.drawRect(i, !0, !1),
              l.vP.Success);
        }
        drawRoundedGradientRect(t, e, n, i, s) {
          return null == this.context
            ? l.vP.Failure
            : (this.setGradientFillStyle(t, e, n),
              this.drawRoundedRect(i, s, !0, !1),
              l.vP.Success);
        }
        clip(t, e) {
          if (null == this.context) return;
          this.context.save();
          let { x: n, y: i } = t,
            s = new Path2D(e);
          this.context.translate(n, i), this.context.clip(s);
        }
        clipRect(t, e) {
          if (null == this.context) return;
          this.context.save();
          let { x: n, y: i, w: s, h: o } = t;
          if (e) {
            let t = new Path2D();
            t.moveTo(0, 0),
              t.lineTo(this.canvas.width, 0),
              t.lineTo(this.canvas.width, this.canvas.height),
              t.lineTo(0, this.canvas.height),
              t.lineTo(0, 0),
              t.closePath(),
              t.rect(n, i, s, o),
              this.context.clip(t, "evenodd");
          } else {
            let t = new Path2D();
            t.rect(n, i, s, o), this.context.clip(t);
          }
        }
        clipRoundedRect(t) {
          let e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 0,
            n = arguments.length > 2 ? arguments[2] : void 0;
          if (null == this.context) return;
          this.context.save();
          let { x: i, y: s, w: o, h: r } = t;
          if (n) {
            let t = new Path2D();
            t.moveTo(0, 0),
              t.lineTo(this.canvas.width, 0),
              t.lineTo(this.canvas.width, this.canvas.height),
              t.lineTo(0, this.canvas.height),
              t.lineTo(0, 0),
              t.closePath(),
              t.roundRect(i, s, o, r, e),
              this.context.clip(t, "evenodd");
          } else {
            let t = new Path2D();
            t.roundRect(i, s, o, r, e), this.context.clip(t);
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
    921608: function (t, e, n) {
      n.d(e, {
        F: function () {
          return i;
        },
        n: function () {
          return s;
        },
      });
      let i = 12,
        s = 24;
    },
    693824: function (t, e, n) {
      var i, s, o, r, l, a, h, c;
      n.d(e, {
        GX: function () {
          return i;
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
        ((l = i || (i = {}))[(l.None = 0)] = "None"),
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
//# sourceMappingURL=363e8bd1399a629400fa.js.map
