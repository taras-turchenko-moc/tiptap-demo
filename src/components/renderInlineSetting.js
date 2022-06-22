export function renderInlineSetting(setting) {
    const styles = Object.entries(setting).reduce((css, [name, value]) => {
        if (!value) return css;
        const property = name.replace(/_/g, '-');
        return `${css}--${property}: ${value}; `;
    }, '');

    return ['span', { style: styles, class: 'zp-text-style' }, 0]
}
