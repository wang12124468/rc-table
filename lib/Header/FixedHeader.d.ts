import * as React from 'react';
import { HeaderProps } from './Header';
export interface FixedHeaderProps<RecordType> extends HeaderProps<RecordType> {
    colWidths: number[];
    columCount: number;
    direction: 'ltr' | 'rtl';
    wrapperStyle: React.CSSProperties;
}
declare function FixedHeader<RecordType>({ columns, flattenColumns, colWidths, columCount, stickyOffsets, direction, wrapperStyle, ...props }: FixedHeaderProps<RecordType>): JSX.Element;
export default FixedHeader;
