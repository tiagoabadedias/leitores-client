/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}


interface Object {
  $get(type: string): any;
}