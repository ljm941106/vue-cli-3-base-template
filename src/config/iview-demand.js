import Vue from "vue";
//按需引入iview，还需babel-plugin-import插件并配置.babelrc
import {
  Button,
  Icon,
  Cell,
  Table,
  Switch,
  Circle,
  Alert,
  Message,
  Notice,
  Modal,
  Drawer
} from "iview";
Vue.component("Button", Button);
Vue.component("Icon", Icon);
Vue.component("Cell", Cell);
Vue.component("Table", Table);
Vue.component("Modal", Modal);
Vue.component("Drawer", Drawer);

Vue.component("i-switch", Switch);
Vue.component("i-circle", Circle);

Vue.prototype.$Alert = Alert;
Vue.prototype.$Message = Message;
Vue.prototype.$Notice = Notice;
Vue.prototype.$Modal = Modal;
