interface Option {
    value: string | number,
    label: string | number
}

export interface SelectProps {
    options: Option[],
    onSelect?: (value: string | number) => void
}