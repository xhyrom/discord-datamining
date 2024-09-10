(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["35535"],
  {
    311308: function (t, i, e) {
      let s = e(888902),
        a = e(168188);
      t.exports = { TimelineDataSeries: s, TimelineGraphView: a };
    },
    888902: function (t) {
      var i = (function () {
        "use strict";
        function t() {
          (this.dataPoints_ = []),
            (this.color_ = "red"),
            (this.isVisible_ = !0),
            (this.cacheStartTime_ = null),
            (this.cacheStepSize_ = 0),
            (this.cacheValues_ = []);
        }
        function i(t, i) {
          (this.time = t), (this.value = i);
        }
        return (
          (t.prototype = {
            toJSON: function () {
              if (this.dataPoints_.length < 1) return {};
              for (var t = [], i = 0; i < this.dataPoints_.length; ++i)
                t.push(this.dataPoints_[i].value);
              return {
                startTime: this.dataPoints_[0].time,
                endTime: this.dataPoints_[this.dataPoints_.length - 1].time,
                values: JSON.stringify(t),
              };
            },
            addPoint: function (t, e) {
              var s = new Date(t);
              this.dataPoints_.push(new i(s, e)),
                this.dataPoints_.length > 1e3 && this.dataPoints_.shift();
            },
            setPoints: function (t) {
              let i = Math.max(0, t.length - 1e3);
              this.dataPoints_ = t.slice(i);
            },
            isVisible: function () {
              return this.isVisible_;
            },
            show: function (t) {
              this.isVisible_ = t;
            },
            getColor: function () {
              return this.color_;
            },
            setColor: function (t) {
              this.color_ = t;
            },
            getCount: function () {
              return this.dataPoints_.length;
            },
            getValues: function (t, i, e) {
              return this.cacheStartTime_ == t &&
                this.cacheStepSize_ == i &&
                this.cacheValues_.length == e
                ? this.cacheValues_
                : ((this.cacheValues_ = this.getValuesInternal_(t, i, e)),
                  (this.cacheStartTime_ = t),
                  (this.cacheStepSize_ = i),
                  this.cacheValues_);
            },
            getValuesInternal_: function (t, i, e) {
              for (var s = [], a = 0, h = 0, n = t, r = 0; r < e; ++r) {
                for (
                  ;
                  a < this.dataPoints_.length && this.dataPoints_[a].time < n;

                )
                  (h = this.dataPoints_[a].value), ++a;
                (s[r] = h), (n += i);
              }
              return s;
            },
          }),
          t
        );
      })();
      t.exports = i;
    },
    168188: function (t) {
      var i = (function () {
        "use strict";
        function t(t, i) {
          (this.scrollbar_ = { position_: 0, range_: 0 }),
            (this.devicePixelRatio = i || 1),
            (this.canvas_ = t),
            (t.width = parseInt(t.width, 10) * this.devicePixelRatio),
            (t.height = parseInt(t.height, 10) * this.devicePixelRatio),
            (this.gridColor = "#CCC"),
            (this.textColor = "#000"),
            (this.backgroundColor = "#FFF"),
            (this.fontWeight = "normal"),
            (this.fontSize = 10),
            (this.fontFamily = "sans-serif"),
            (this.timeLocales = []),
            (this.timeOptions = {}),
            (this.startTime_ = 0),
            (this.endTime_ = 1),
            (this.graph_ = null),
            (this.scale_ = 1e3 / this.devicePixelRatio),
            this.updateScrollbarRange_(!0);
        }
        t.prototype = {
          setScale: function (t) {
            this.scale_ = t;
          },
          getLength_: function () {
            return Math.floor((this.endTime_ - this.startTime_) / this.scale_);
          },
          graphScrolledToRightEdge_: function () {
            return this.scrollbar_.position_ == this.scrollbar_.range_;
          },
          updateScrollbarRange_: function (t) {
            var i = this.getLength_() - this.canvas_.width;
            i < 0 && (i = 0),
              this.scrollbar_.position_ > i && (t = !0),
              (this.scrollbar_.range_ = i),
              t && ((this.scrollbar_.position_ = i), this.repaint());
          },
          setDateRange: function (t, i) {
            (this.startTime_ = t.getTime()),
              (this.endTime_ = i.getTime()),
              this.endTime_ <= this.startTime_ &&
                (this.startTime_ = this.endTime_ - 1),
              this.updateScrollbarRange_(!0);
          },
          updateEndDate: function (t) {
            (this.endTime_ = t || new Date().getTime()),
              this.updateScrollbarRange_(this.graphScrolledToRightEdge_());
          },
          getStartDate: function () {
            return new Date(this.startTime_);
          },
          setDataSeries: function (t) {
            this.graph_ = new i(this.devicePixelRatio);
            for (var e = 0; e < t.length; ++e) this.graph_.addDataSeries(t[e]);
            this.repaint();
          },
          addDataSeries: function (t) {
            !this.graph_ && (this.graph_ = new i(this.devicePixelRatio)),
              this.graph_.addDataSeries(t),
              this.repaint();
          },
          repaint: function () {
            if (null === this.canvas_.offsetParent) return;
            this.repaintTimerRunning_ = !1;
            var t = this.canvas_.width,
              i = this.canvas_.height,
              e = this.canvas_.getContext("2d");
            if (
              ((e.fillStyle = this.backgroundColor),
              e.fillRect(0, 0, t, i),
              !(4 * this.fontSize > i) && !(t < 50))
            ) {
              e.save();
              var s = this.scrollbar_.position_;
              0 == this.scrollbar_.range_ && (s = this.getLength_() - t);
              var a = this.startTime_ + s * this.scale_,
                h = i;
              (i -= Math.ceil(this.fontSize * this.devicePixelRatio) + 4),
                this.drawTimeLabels(e, t, i, h, a),
                (e.strokeStyle = this.gridColor),
                (e.lineWidth = this.devicePixelRatio),
                e.strokeRect(1, 1, t - 1, i - 1),
                this.graph_ &&
                  (this.graph_.layout(t, i, this.fontSize, a, this.scale_),
                  this.graph_.drawTicks(e),
                  this.graph_.drawLines(e),
                  this.graph_.drawLabels(e)),
                e.restore();
            }
          },
          drawTimeLabels: function (t, i, e, s, a) {
            var h = 6e4 * Math.ceil(a / 6e4);
            for (
              t.textBaseline = "bottom",
                t.textAlign = "center",
                t.fillStyle = this.textColor,
                t.strokeStyle = this.gridColor,
                t.lineWidth = this.devicePixelRatio,
                t.font = `${this.fontWeight} ${this.fontSize * this.devicePixelRatio}px ${this.fontFamily}`;
              ;

            ) {
              var n = Math.round((h - a) / this.scale_);
              if (n >= i) break;
              var r = new Date(h).toLocaleTimeString(
                this.timeLocales,
                this.timeOptions,
              );
              t.fillText(r, n, s),
                t.beginPath(),
                t.lineTo(n, 1),
                t.lineTo(n, e),
                t.stroke(),
                (h += 6e4);
            }
          },
          getDataSeriesCount: function () {
            return this.graph_ ? this.graph_.dataSeries_.length : 0;
          },
          hasDataSeries: function (t) {
            return !!this.graph_ && this.graph_.hasDataSeries(t);
          },
        };
        var i = (function () {
          function t(t) {
            (this.devicePixelRatio = t || 1),
              (this.dataSeries_ = []),
              (this.width_ = 0),
              (this.height_ = 0),
              (this.fontHeight_ = 0),
              (this.startTime_ = 0),
              (this.scale_ = 0),
              (this.min_ = 0),
              (this.max_ = 0),
              (this.labels_ = []);
          }
          return (
            (t.prototype = {
              addDataSeries: function (t) {
                this.dataSeries_.push(t);
              },
              hasDataSeries: function (t) {
                for (var i = 0; i < this.dataSeries_.length; ++i)
                  if (this.dataSeries_[i] == t) return !0;
                return !1;
              },
              getValues: function (t) {
                return t.isVisible()
                  ? t.getValues(this.startTime_, this.scale_, this.width_)
                  : null;
              },
              layout: function (t, i, e, s, a) {
                (this.width_ = t),
                  (this.height_ = i),
                  (this.fontHeight_ = e),
                  (this.startTime_ = s),
                  (this.scale_ = a);
                for (
                  var h = 0, n = 0, r = 0;
                  r < this.dataSeries_.length;
                  ++r
                ) {
                  var o = this.getValues(this.dataSeries_[r]);
                  if (o)
                    for (var l = 0; l < o.length; ++l)
                      o[l] > h ? (h = o[l]) : o[l] < n && (n = o[l]);
                }
                this.layoutLabels_(n, h);
              },
              layoutLabels_: function (t, i) {
                if (i - t < 1024) {
                  this.layoutLabelsBasic_(t, i, 2);
                  return;
                }
                var e = ["", "k", "M", "G", "T", "P"],
                  s = 1;
                for (t /= 1024, i /= 1024; e[s + 1] && i - t >= 1024; )
                  (t /= 1024), (i /= 1024), ++s;
                this.layoutLabelsBasic_(t, i, 2);
                for (var a = 0; a < this.labels_.length; ++a)
                  this.labels_[a] += " " + e[s];
                (this.min_ *= Math.pow(1024, s)),
                  (this.max_ *= Math.pow(1024, s));
              },
              layoutLabelsBasic_: function (t, i, e) {
                this.labels_ = [];
                var s = i - t;
                if (0 == s) {
                  this.min_ = this.max_ = i;
                  return;
                }
                var a = 2 * this.fontHeight_ + 4,
                  h = 1 + this.height_ / a;
                h < 2 ? (h = 2) : h > 6 && (h = 6);
                for (
                  var n = Math.pow(10, -e), r = e;
                  !(Math.ceil(s / n) + 1 <= h);

                ) {
                  if (Math.ceil(s / (2 * n)) + 1 <= h) {
                    n *= 2;
                    break;
                  }
                  if (Math.ceil(s / (5 * n)) + 1 <= h) {
                    n *= 5;
                    break;
                  }
                  (n *= 10), r > 0 && --r;
                }
                (this.max_ = Math.ceil(i / n) * n),
                  (this.min_ = Math.floor(t / n) * n);
                for (var o = this.max_; o >= this.min_; o -= n)
                  this.labels_.push(o.toFixed(r));
              },
              drawTicks: function (t) {
                (i = this.width_ - 1),
                  (e = this.width_ - 1 - 10),
                  (t.fillStyle = this.gridColor),
                  (t.lineWidth = this.devicePixelRatio),
                  t.beginPath();
                for (var i, e, s = 1; s < this.labels_.length - 1; ++s) {
                  var a = Math.round(
                    (this.height_ * s) / (this.labels_.length - 1),
                  );
                  t.moveTo(i, a), t.lineTo(e, a);
                }
                t.stroke();
              },
              drawLines: function (t) {
                var i = 0,
                  e = this.height_ - 1;
                this.max_ && (i = e / (this.max_ - this.min_));
                for (var s = this.dataSeries_.length - 1; s >= 0; --s) {
                  var a = this.getValues(this.dataSeries_[s]);
                  if (a) {
                    (t.strokeStyle = this.dataSeries_[s].getColor()),
                      (t.lineWidth = this.devicePixelRatio),
                      t.beginPath();
                    for (var h = 0; h < a.length; ++h)
                      t.lineTo(h, e - Math.round((a[h] - this.min_) * i));
                    t.stroke();
                  }
                }
              },
              drawLabels: function (t) {
                if (0 != this.labels_.length) {
                  var i = this.width_ - 3;
                  (t.fillStyle = this.textColor),
                    (t.textAlign = "right"),
                    (t.textBaseline = "top"),
                    t.fillText(this.labels_[0], i, 0),
                    (t.textBaseline = "bottom");
                  for (
                    var e = (this.height_ - 1) / (this.labels_.length - 1),
                      s = 1;
                    s < this.labels_.length;
                    ++s
                  )
                    t.fillText(this.labels_[s], i, e * s);
                }
              },
            }),
            t
          );
        })();
        return t;
      })();
      t.exports = i;
    },
  },
]);
//# sourceMappingURL=c76aace106cdb513cbcc.js.map
