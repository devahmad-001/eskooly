export type inputAttributes = {
  type?: string;
  placeholder?: string;
  required?: true;
  minLength?: number;
  maxLength?: number;
};

export type btnAttributes={
    type?: string;
    onClick?: () => void;
    disabled?: boolean;
    className?: string;
    text?:string;
    fontFamily?:string;
    fontWeight?:string;
    fontSize?:string;
    backgroundColor?:string;
    background?:string;
    color?:string;
    borderRadius?:string;
    padding?:string;
    width?:string;
    height?:string;
    margin?:string;
    border?:string;
    hoverBackgroundColor?:string;
    hoverColor?:string;
    hoverBorder?:string;
    transition?:string;
    boxShadow?:string;
    cursor?:string;
    borderColor?:string;
}