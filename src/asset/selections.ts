export interface ManageUserOption {
    readonly value: string;
    readonly label: string;
    readonly isFixed?: boolean;
    readonly isDisabled?: boolean;
}

export const manageUserOptions: readonly ManageUserOption[] = [
    { value: 'add', label: 'add user', isFixed: true },
    { value: 'edit', label: 'edit user', isFixed: true  },
    { value: 'delete', label: 'delete user', isFixed: true },
];