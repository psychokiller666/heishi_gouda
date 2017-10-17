<template>
  <div class="win95">
    <div class="wrapper">
      <div class="page">
        <div class="win95-header">
          <div class="title">
            <div class="icon"></div>
            公路商店.exe
          </div>
          <div class="menu">
            <nuxt-link to="/edit" class="menu-button">个人中心</nuxt-link>
            <nuxt-link to="/list" class="menu-button">列表</nuxt-link>
            <button disabled="disabled" class="menu-button">Chill</button>
            <button disabled="disabled" class="menu-button">Thirsty</button>
            <button disabled="disabled" class="menu-button">Wait</button>
          </div>
        </div>
        <nuxt />
      </div>
      <div class="windows-border">
        <div class="windows-border-left-top">
          <div class="windows-border-left-top-hack"></div>
        </div>
        <div class="windows-border-right-bottom">
          <div class="windows-border-right-bottom-hack"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
.win95 {
  height: 100vh;
  width: 100%;
  box-sizing: border-box;
  .windows-border-left-top {
    .windows-border-left-top-hack {
      &:before {
        content: '';
        z-index: 666;
        position: absolute;
        width: 4px;
        height: 4px;
        top: 0;
        left: 0;
        background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDQzQ3NzEyOUVGQzUxMUU2QTEzQUM0MjU3RDNBQjA1NSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDQzQ3NzEyQUVGQzUxMUU2QTEzQUM0MjU3RDNBQjA1NSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkYzRkIyM0I0RUZDNDExRTZBMTNBQzQyNTdEM0FCMDU1IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkNDNDc3MTI4RUZDNTExRTZBMTNBQzQyNTdEM0FCMDU1Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+WJSfsgAAADVJREFUeNpivH37Njs7+8+fP4EkEwsLC5AFJP/+/cvy588foJikpDgLCxsTVIyFjYGBASDAACm7EhtbX67DAAAAAElFTkSuQmCC');
      }
      &:after {
        content: '';
        z-index: 666;
        position: absolute;
        width: 4px;
        height: 4px;
        bottom: 0;
        left: 0;
        background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDQzY2MDc5REVGQzUxMUU2QTEzQUM0MjU3RDNBQjA1NSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDQzY2MDc5RUVGQzUxMUU2QTEzQUM0MjU3RDNBQjA1NSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkNDNjYwNzlCRUZDNTExRTZBMTNBQzQyNTdEM0FCMDU1IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkNDNjYwNzlDRUZDNTExRTZBMTNBQzQyNTdEM0FCMDU1Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+2sxvNwAAAChJREFUeNpivH37Njs7+7RZs7nYWJlYWFj+/v3LwcL8798/BpwAIMAAkusKljG4rN4AAAAASUVORK5CYII=');
      }
    }
    &:before {
      content: '';
      position: absolute;
      width: 100%;
      height: 4px;
      top: 0;
      background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAAECAIAAAArjXluAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpGM0ZCMjNCMkVGQzQxMUU2QTEzQUM0MjU3RDNBQjA1NSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpGM0ZCMjNCM0VGQzQxMUU2QTEzQUM0MjU3RDNBQjA1NSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkYzRkIyM0IwRUZDNDExRTZBMTNBQzQyNTdEM0FCMDU1IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkYzRkIyM0IxRUZDNDExRTZBMTNBQzQyNTdEM0FCMDU1Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+VP0izQAAACZJREFUeNpivH37Njs7OxMLC8vfv38Zfv/++f//f0YgZmBgAAgwAMJmDpeK6zI9AAAAAElFTkSuQmCC');
    }
    &:after {
      content: '';
      position: absolute;
      height: 100%;
      width: 4px;
      left: 0;
      background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpGM0ZCMjNBQUVGQzQxMUU2QTEzQUM0MjU3RDNBQjA1NSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpGM0ZCMjNBQkVGQzQxMUU2QTEzQUM0MjU3RDNBQjA1NSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjI1NEZFNDA5RUZDNDExRTZBMTNBQzQyNTdEM0FCMDU1IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjI1NEZFNDBBRUZDNDExRTZBMTNBQzQyNTdEM0FCMDU1Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+SfoA3gAAACRJREFUeNpivH37Njs7u6SkOAsLGxMLC8vPnz+BLAYGBoAAAwBdswYGbgCAWQAAAABJRU5ErkJggg==');

    }
  }
  .windows-border-right-bottom {
    .windows-border-right-bottom-hack {
      &:after {
        content: '';
        z-index: 666;
        position: absolute;
        width: 4px;
        height: 4px;
        right: 0;
        top: 0;
        background-image: url('data:image/gif;base64,R0lGODlhBAAEAKIAANvb2+Li4nh8fYKCgt/f34CAgAAAAAAAACH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS4zLWMwMTEgNjYuMTQ1NjYxLCAyMDEyLzAyLzA2LTE0OjU2OjI3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkNDNDc3MTMxRUZDNTExRTZBMTNBQzQyNTdEM0FCMDU1IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkNDNDc3MTMyRUZDNTExRTZBMTNBQzQyNTdEM0FCMDU1Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6Q0M0NzcxMkZFRkM1MTFFNkExM0FDNDI1N0QzQUIwNTUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6Q0M0NzcxMzBFRkM1MTFFNkExM0FDNDI1N0QzQUIwNTUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4B//79/Pv6+fj39vX08/Lx8O/u7ezr6uno5+bl5OPi4eDf3t3c29rZ2NfW1dTT0tHQz87NzMvKycjHxsXEw8LBwL++vby7urm4t7a1tLOysbCvrq2sq6qpqKempaSjoqGgn56dnJuamZiXlpWUk5KRkI+OjYyLiomIh4aFhIOCgYB/fn18e3p5eHd2dXRzcnFwb25tbGtqaWhnZmVkY2JhYF9eXVxbWllYV1ZVVFNSUVBPTk1MS0pJSEdGRURDQkFAPz49PDs6OTg3NjU0MzIxMC8uLSwrKikoJyYlJCMiISAfHh0cGxoZGBcWFRQTEhEQDw4NDAsKCQgHBgUEAwIBAAAh+QQAAAAAACwAAAAABAAEAAADCQhhRsRisFJYAgA7');
      }
      &:before {
        content: '';
        z-index: 666;
        position: absolute;
        width: 4px;
        height: 4px;
        right: 0;
        bottom: 0;
        background-image: url('data:image/gif;base64,R0lGODlhBAAEAJEAAHh8fYKCgoCAgAAAACH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS4zLWMwMTEgNjYuMTQ1NjYxLCAyMDEyLzAyLzA2LTE0OjU2OjI3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkNDNjg2MkI2RUZDNTExRTZBMTNBQzQyNTdEM0FCMDU1IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkNDNjg2MkI3RUZDNTExRTZBMTNBQzQyNTdEM0FCMDU1Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6Q0M2NjA3OUZFRkM1MTFFNkExM0FDNDI1N0QzQUIwNTUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6Q0M2NjA3QTBFRkM1MTFFNkExM0FDNDI1N0QzQUIwNTUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4B//79/Pv6+fj39vX08/Lx8O/u7ezr6uno5+bl5OPi4eDf3t3c29rZ2NfW1dTT0tHQz87NzMvKycjHxsXEw8LBwL++vby7urm4t7a1tLOysbCvrq2sq6qpqKempaSjoqGgn56dnJuamZiXlpWUk5KRkI+OjYyLiomIh4aFhIOCgYB/fn18e3p5eHd2dXRzcnFwb25tbGtqaWhnZmVkY2JhYF9eXVxbWllYV1ZVVFNSUVBPTk1MS0pJSEdGRURDQkFAPz49PDs6OTg3NjU0MzIxMC8uLSwrKikoJyYlJCMiISAfHh0cGxoZGBcWFRQTEhEQDw4NDAsKCQgHBgUEAwIBAAAh+QQAAAAAACwAAAAABAAEAAACBkQ2Isg9BQA7');
      }
    }
    &:after {
      content: '';
      position: absolute;
      width: 4px;
      height: 100%;
      right: 0;
      background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyNTRGRTQwM0VGQzQxMUU2QTEzQUM0MjU3RDNBQjA1NSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyNTRGRTQwNEVGQzQxMUU2QTEzQUM0MjU3RDNBQjA1NSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjI1NEZFNDAxRUZDNDExRTZBMTNBQzQyNTdEM0FCMDU1IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjI1NEZFNDAyRUZDNDExRTZBMTNBQzQyNTdEM0FCMDU1Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+7cUieAAAABlJREFUeNpiaAADBjBg+vHnLzMzM4QDEGAAZFIF/YZZn/oAAAAASUVORK5CYII=');
    }
    &:before {
      content: '';
      position: absolute;
      height: 4px;
      width: 100%;
      bottom: 0px;
      background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAAECAIAAAArjXluAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyNTRGRTQwN0VGQzQxMUU2QTEzQUM0MjU3RDNBQjA1NSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyNTRGRTQwOEVGQzQxMUU2QTEzQUM0MjU3RDNBQjA1NSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjI1NEZFNDA1RUZDNDExRTZBMTNBQzQyNTdEM0FCMDU1IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjI1NEZFNDA2RUZDNDExRTZBMTNBQzQyNTdEM0FCMDU1Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+AvHEfQAAABtJREFUeNpirKip5WZnY+JkZfn79y8DCgAIMABYzwSW+98IBQAAAABJRU5ErkJggg==');
    }
  }
  .win95-features {
    height: 60px;
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGUAAABgCAIAAACL0ysrAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpjZDM1ZTk0ZS0zNzNlLTRkOGQtYjYzOS02NDhiN2NjZDQ5NjUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6ODI4MDdGN0FGMDJFMTFFNkE4NkI5NEI3NEYzMDU4MTQiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6ODI4MDdGNzlGMDJFMTFFNkE4NkI5NEI3NEYzMDU4MTQiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDphNzAzN2U5Ni0yYzc0LTRiMmItOGNmOS01ZGE4NzVkMmY5YWQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6Y2QzNWU5NGUtMzczZS00ZDhkLWI2MzktNjQ4YjdjY2Q0OTY1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');
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 60px;
    padding: 0 8px;
    &:after {
      content: " ";
      display: table;
      clear: both;
    }
    .back {
      float: left;
      margin-top: 10px;
      color: #000;
      max-height: 40px;
      max-width: 86px;
      display: block;
    }
    .file-uploads {
      float: right;
      margin-top: 10px;
      overflow:visible;
    }
    button {
      margin-top: 10px;
      height: 40px;
      width: 86px;
      &.like {
        float: left;
      }
      &.shit {
        float: right;
      }
      &.save {
        float: right;
      }
      &:disabled {
        color: #838383;
      }
    }
  }
}
.wrapper {
  position: absolute;
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAIAAAD91JpzAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDQzY4NjJCQUVGQzUxMUU2QTEzQUM0MjU3RDNBQjA1NSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDQzY4NjJCQkVGQzUxMUU2QTEzQUM0MjU3RDNBQjA1NSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkNDNjg2MkI4RUZDNTExRTZBMTNBQzQyNTdEM0FCMDU1IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkNDNjg2MkI5RUZDNTExRTZBMTNBQzQyNTdEM0FCMDU1Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+GLTOKwAAABdJREFUeNpi3L17NysrKxMQMzAwAAQYABtIAlN/A+HFAAAAAElFTkSuQmCC');
  overflow: hidden;
  .page {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow-x: hidden;
    overflow-y: auto;
    width: auto;
    height: auto;
    padding: 8px;
  }
}
.win95-header {
  .title {
    height: 30px;
    background-color: #00007f;
    position: relative;
    line-height: 30px;
    color: #fff;
    font-weight: bold;
    padding-left: 36px;
    .icon {
      position: absolute;
      left: 0;
      width: 36px;
      height: 30px;
      background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAIAAAAnX375AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpjZDM1ZTk0ZS0zNzNlLTRkOGQtYjYzOS02NDhiN2NjZDQ5NjUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzI0NkExQjlGMDMyMTFFNkE4NkI5NEI3NEYzMDU4MTQiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzI0NkExQjhGMDMyMTFFNkE4NkI5NEI3NEYzMDU4MTQiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDphNzAzN2U5Ni0yYzc0LTRiMmItOGNmOS01ZGE4NzVkMmY5YWQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6Y2QzNWU5NGUtMzczZS00ZDhkLWI2MzktNjQ4YjdjY2Q0OTY1Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+jvYdGwAAAM1JREFUeNrs1SEOwkAQheG3FWTrERwCT0jwta1CkqI4FRyhK9sLgEVwCAL4NiCWpE0QhcA2OztBzO8nX8bMKGstPKqqU5pum0YDI0C5jETwK0mmxiy1vgF3wHKQrTozJtf66qgSkK06N2btqNKQg1Qy0l2lJB1VYtJFpSd/qkHI72oo8qXGcf9KBCQ7tSjynhqW/KgGJ99V5flJhvycQ5bt6noMy1hZ7oEV35ZdSi0icHfhJx/8JIQUUkghhRRSyL8kFbABjsCZS5w8BRgAL73OA6QcCw8AAAAASUVORK5CYII=');
      background-repeat: no-repeat;
      background-size: 18px 18px;
      background-position: center;
    }
    &:after {
      content: '';
      position: absolute;
      right: 4px;
      top: 4px;
      height: 22px;
      width: 74px;
      background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAAcCAIAAAAY8Y2vAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6ODI4MDdGN0RGMDJFMTFFNkE4NkI5NEI3NEYzMDU4MTQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6ODI4MDdGN0VGMDJFMTFFNkE4NkI5NEI3NEYzMDU4MTQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo4MjgwN0Y3QkYwMkUxMUU2QTg2Qjk0Qjc0RjMwNTgxNCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo4MjgwN0Y3Q0YwMkUxMUU2QTg2Qjk0Qjc0RjMwNTgxNCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pp76XakAAAJWSURBVHja7FltbsIwDO132bgR0iRutp1i0jZtF+EP0iTugMQ12OgXnalZ8ZomuE09KkGEogjMM7ZfXp3gZFlSlqXE7FRDGt9xHuuXtC+XeB14uK4LszR+labjKMsnUV9BnqdBEG02mziOkyQZZH5+fbuPQnQjjU+HtC8P0A85C4KiKGAGC/v1JPD3+z06kManQzwWrEae55DF9Xo9nUy3u20YhlmW9V7v8mIaR7TaFH/2MOuxERaLRSu+yiy5WE7MglzCZ2mRwgzv2KzvwkNNGtWu8fuphg6/lVlSsdBqQEYt64Dr7yxvaBbF75cs+tsovo5Z1J5yGRja+pt1NtTXH82yrwOudZrVO1OI3Iqv0yxqr8Ph2Gg1y55TZs1CG1WDzJhYcx2+gVm1PfpCnPl83uCOmXej0Cw+5lCapeOOmXej0Cy+L3vN0vGr8bQ9G8vFNIuPaa9ZOh5xtIz68qAaVU1y3/chl5EfwYyV7L2GfQ5odbUb+DVTmJiqPcVvMOtsLMCg1eeqwanlcsmJ5Yo0q+vzUfV1Yhbuc0tO4Rr2ued5jWrX+DVTmJiqPcVvZZYhlnk16LfwHU4sN826aVZbLJRTqFNUv3T8ulLNEuyzOHcDnN5kDH2WuUc39/esPqvreW3MmiV+NmTeBPQ+G6o9NN9Xv7Ohmb86G9bZsOsd01XfZ+n0yP5syL9v4ODzz4b2vi7QZw2L37XPsooFq/Hy/gH5+0oz2J/bJLVcq5olh68yS87XkVmYP9yfQ61pteXwVWYJxvL7V6XUkMb/T1+ecxvs8SPAAPYj6SWfoA3fAAAAAElFTkSuQmCC');
      background-repeat: no-repeat;
      background-position-x: right;
      background-position-y: center;
      background-size: 74px 22px;
    }
  }
  .menu {
    padding: 5px 8px;
    &:after {
      content: " ";
      display: table;
      clear: both;
    }
    .menu-button {
      display: block;
      text-decoration:none;
      color: #000;
      float: left;
      margin: 0;
      padding: 0 5px;
      border: none;
      background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAIAAAD91JpzAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDQzY4NjJCQUVGQzUxMUU2QTEzQUM0MjU3RDNBQjA1NSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDQzY4NjJCQkVGQzUxMUU2QTEzQUM0MjU3RDNBQjA1NSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkNDNjg2MkI4RUZDNTExRTZBMTNBQzQyNTdEM0FCMDU1IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkNDNjg2MkI5RUZDNTExRTZBMTNBQzQyNTdEM0FCMDU1Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+GLTOKwAAABdJREFUeNpi3L17NysrKxMQMzAwAAQYABtIAlN/A+HFAAAAAElFTkSuQmCC");
      border-top: 4px solid #c7c7c7;
      border-left: 4px solid #c7c7c7;
      border-bottom: 4px solid #c7c7c7;
      border-right: 4px solid #c7c7c7;
      border-color: transparent;
      &.router-link-active {
        position: relative;
        border-top: 4px solid #000;
        border-left: 4px solid #000;
        border-bottom: 4px solid #fff;
        border-right: 4px solid #fff;
        background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzI0NkExQkNGMDMyMTFFNkE4NkI5NEI3NEYzMDU4MTQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzI0NkExQkRGMDMyMTFFNkE4NkI5NEI3NEYzMDU4MTQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3MjQ2QTFCQUYwMzIxMUU2QTg2Qjk0Qjc0RjMwNTgxNCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3MjQ2QTFCQkYwMzIxMUU2QTg2Qjk0Qjc0RjMwNTgxNCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PszFiIUAAAA2SURBVHjaYvz9+ycLC9uePXu4ObiZgCwGBgZWVtZff38x7N69+9jhY0D5////M0HEIPIAAQYAMUQV3fEUKkgAAAAASUVORK5CYII=');
        &:after {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          left: -2px;
          top: -2px;
          bottom: 0;
          right: 0;
          border-top: 2px solid #808080;
          border-left: 2px solid #808080;
          border-bottom: 2px solid #e2e2e2;
          border-right: 2px solid #e2e2e2;
        }
      }
      &:first-letter {
        text-decoration:underline !important;
      }
      &:disabled {
        color: #838383;
      }
      &:first-child {
        padding-left: 0;
      }
    }
  }
}
</style>
