declare module 'react-copy-to-clipboard' {
    import React from 'react';

    interface CopyToClipboardProps {
        text: string;
        onCopy?: (text: string, result: boolean) => void;
        children: React.ReactNode;
    }

    const CopyToClipboard: React.FC<CopyToClipboardProps>;
    export default CopyToClipboard;
}
