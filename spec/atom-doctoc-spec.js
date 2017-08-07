'use babel';

import { beforeEach, it } from 'jasmine-fix';

describe('The atom-doctoc plugin, ', () => {
  it('should be in the packages list', () =>
      expect(atom.packages.isPackageLoaded('atom-doctoc')).toBe(true),
    );

    it('should be an active package', () =>
    expect(atom.packages.isPackageActive('atom-doctoc')).toBe(true),
  );
})
