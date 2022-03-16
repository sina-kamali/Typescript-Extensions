declare global {
  interface Array<T> {
    ind(item: T): T | null;
    indexOfItem(callback: (item: T) => boolean): number;
    forEachItem(callback: (item: T) => void): void;
    forEachTill(callback: (item: T) => boolean): void;
    firstOrDefault(callback: (item: T) => boolean): T | null;
    where(callback: (item: T) => boolean): T[];
    count(callback: (item: T) => boolean): number;
    sortAsc(sortBy: string ): void;
    sortDesc(sortBy: string): void;
    select(callback: (item: T) => any): any[];
    isNotEmpty(): boolean;
  }
  interface String {
    isNotEmpty(): boolean;
  }
}
// Array
if (!Array.prototype.ind) {
  Array.prototype.ind = function<T>(item: T): T | null {
    let length = 0;
    const _self = this as Array<T>;
    if (this != null) {
      length = _self.length;
    }

    for (let i = 0; i < length; i++) {
      const val = _self[i];
      if (item === val) {
        return val;
      }
    }
    return null;
  };
}
if (!Array.prototype.indexOfItem) {
  Array.prototype.indexOfItem = function<T>(callback: (item: T) => boolean): number {
    const _self = this as Array<T>;
    if (_self === null || _self === undefined || _self.length === 0) {
      return -1;
    }
    return _self.findIndex((x: T) => callback(x) === true);
  };
}
if (!Array.prototype.forEachItem) {
  Array.prototype.forEachItem = function<T>(callback: (item: T) => void): void {
    const _self = this as Array<T>;
    if (this === null || this === undefined) {
      return
    }
    _self.forEach((e: T) => callback(e));
  };
}
if (!Array.prototype.forEachTill) {
  Array.prototype.forEachTill = function<T>(callback: (item: T) => boolean): void {
    const _self = this as Array<T>;
    if (this === null || this === undefined) {
      return
    }
    _self.forEach((e: T) => {
      if (callback(e) === false) {
        return;
      }
    });
  };
}
if (!Array.prototype.firstOrDefault) {
  Array.prototype.firstOrDefault = function<T>(callback: (item: T) => boolean): T | null {
    const _self = this as Array<T>;
    if (this === null || this === undefined || _self.length === 0) {
      return null;
    }
    return _self.find((x: T) => (callback(x) === true));
  };
}
if (!Array.prototype.where) {
  Array.prototype.where = function<T>(callback: (item: T) => boolean): T[] {
    const _self = this as Array<T>;
    if (this === null || this === undefined || _self.length === 0) {
      return [];
    }
    const items = _self.filter((x: T) => (callback(x) === true));
    return items ? items : [];
  };
}
if (!Array.prototype.count) {
// TODO: recode this
  Array.prototype.count = function<T>(callback: (item: T) => boolean): number {
    const _self = this as Array<T>;
    let length = 0;

    if (this != null) {
      length = _self.length;
    }

    let result: number;
    result = 0;

    for (let i = 0; i < length; i++) {
      const val = _self[i];
      if (callback(val) === true) {
        result += 1;
      }
    }
    return result;
  };
}
if (!Array.prototype.sortAsc) {
  Array.prototype.sortAsc = function<T>(sortBy: string ): void {
    const _self = this as Array<T>;
    _self.sort((a, b) => { return a[sortBy] > b[sortBy] ? 1 : (a[sortBy] < b[sortBy] ? -1 : 0); });
  };
}
if (!Array.prototype.sortDesc) {
  Array.prototype.sortDesc = function<T>(sortBy: string): void {
    const _self = this as Array<T>;
    _self.sort((a, b) => { return a[sortBy] < b[sortBy] ? 1 : (a[sortBy] > b[sortBy] ? -1 : 0); });
  };
}
if (!Array.prototype.select) {
  Array.prototype.select = function<T>(callback: (item: T) => any): any[] {
    const _self = this as Array<T>;
    const items = [];

    for (let i = 0; i < _self.length; i++) {
      items.push(callback(_self[i]))
    }

    return items;
  };
}
if (!Array.prototype.isNotEmpty) {
  Array.prototype.isNotEmpty = function<T>(): boolean {
    const _self = this as Array<T>;
    if (_self !== null && _self !== undefined && _self.length !== 0) {
      return true;
    }
    return false;
  };
}
// String
if (!String.prototype.isNotEmpty) {
  String.prototype.isNotEmpty = function (): boolean {
    const _self = this as String;
    if (_self !== null && _self !== undefined && _self.trim() !== '') {
      return true;
    }
    return false;
  }
}
