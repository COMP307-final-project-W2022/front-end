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

export interface EditUserOption {
    readonly value: string;
    readonly label: string;
    readonly isFixed?: boolean;
    readonly isDisabled?: boolean;
}

export const editUserOptions: readonly EditUserOption[] = [
    { value: 'email', label: 'email', isFixed: true },
    { value: 'fname', label: 'first name', isFixed: true  },
    { value: 'lname', label: 'last name', isFixed: true },
    { value: 'mcgill-id', label: 'mcgill-id', isFixed: true },
];