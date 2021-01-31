export const getPlural = (num: number) => num > 1 ? "s" : "";

export const getDateDiff = (createdAt: string) => {
    const diffInSeconds = Math.abs((new Date().valueOf() - new Date(createdAt).valueOf())/1000);
    const days = Math.floor(diffInSeconds / 60 / 60 / 24);
    const hours = Math.floor(diffInSeconds / 60 / 60 % 24);

    if (hours === 0 && days === 0) {
        const minutes = Math.abs(Math.round(diffInSeconds / 60));
        return `${minutes} minute${getPlural(minutes)} ago`;
    }
    if (hours < 24 && days === 0) {
        return `${hours} hour${getPlural(hours)} ago`;
    } else if (days < 7) {
        return `${days} day${getPlural(days)} ago`;
    } else if (days > 7 && days <= 31) {
        const week = Math.floor(days / 7);
        return `${week} week${getPlural(week)} ago`;
    } else {
        const month = Math.floor(days / 31);
        return `${month} month${getPlural(month)} ago`;
    }
};

export const getDomain = (url:string) => (new URL(url)).hostname;
