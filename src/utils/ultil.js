export const arrayIsEqual = (a1, a2) =>
    a1 === a2 ||
    a1?.length === a2?.length &&
    a1.every((f,i) =>
        f.id === a2[i].id &&
        f.title === a2[i].title
    )
