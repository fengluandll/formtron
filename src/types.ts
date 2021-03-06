import { Dictionary, IDiagnostic, IRange, JsonPath, Omit } from '@stoplight/types';
import * as React from 'react';
import { themeTypes } from './theme';

export type Resolver = (path: JsonPath) => unknown;

export interface IFormtronCommon {
  id?: string;
  value: any;
  onChange: (value: any) => void;

  schema: any;
  fieldComponents: Dictionary<React.FunctionComponent<IFormtronControl>>;
  disabled?: boolean;
  layout?: string;
  resolver?: Resolver;
}

export interface IFormtronControl extends IFormtronCommon {
  path: string[];
}

export interface IFormtron extends IFormtronCommon {
  selection: string;
  onInternalChange?: Function;
  themeName?: themeTypes;
}

export interface IFormtronDiagnostic extends Omit<IDiagnostic, 'range'> {
  summary?: string;
  range?: IRange;
}

export interface IAddOperation {
  op: 'add';
  path: string;
  value: any;
}

export interface IMoveOperation {
  op: 'move';
  from: string;
  path: string;
}

export interface ISelectOperation {
  op: 'select';
  from: string;
  path: string;
}

export type IOperation = IAddOperation | IMoveOperation | ISelectOperation;
