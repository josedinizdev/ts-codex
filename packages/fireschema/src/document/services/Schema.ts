abstract class Schema {
  constructor(data: any) {
    Object.assign(this, data);
  }

  public save() {
  }

  private getSafeObject() {
    const obj: any = {};

    const props = Object.getOwnPropertyNames(this);

    for (const prop of props) {
      const descriptor = Object.getOwnPropertyDescriptor(this, prop);
      if (!descriptor) continue;
      if (typeof descriptor.get === 'function') continue;
      const val = (this as any)[prop];
      if (typeof val === 'function') continue;
      obj[prop] = val;
    }

    return obj;
  }
}